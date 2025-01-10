<template>
  <div class="theme-container">
    <Navbar />
    <Sidebar />
    <main class="page">
      <div class="theme-default-content">
        <Content />
      </div>
      <div class="right-anchor" v-if="headings.length">
        <div class="right-anchor-title">ON THIS PAGE</div>
        <div class="right-anchor-content">
          <template v-for="heading in filteredHeadings" :key="heading.id">
            <a
              :href="heading.href || `#${heading.id}`"
              :class="[
                'right-anchor-heading',
                `level-${heading.level}`,
                { active: activeId === heading.id }
              ]"
              @click.prevent="scrollToHeading(heading.id, heading.href)"
            >
              <span v-if="heading.emoji" class="heading-emoji">{{ heading.emoji }}</span>
              {{ heading.text }}
            </a>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@vuepress/theme-default/lib/client/components/Navbar.vue'
import Sidebar from '@vuepress/theme-default/lib/client/components/Sidebar.vue'
import { onMounted, onUnmounted, ref, nextTick, computed } from 'vue'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  },
  setup() {
    const headings = ref([])
    const activeId = ref('')
    let observer = null

    // 显示所有标题
    const filteredHeadings = computed(() => {
      return headings.value
    })

    const getHeadings = () => {
      // 只获取 h1 和 h2 标题
      const headers = Array.from(document.querySelectorAll('.theme-default-content h1, .theme-default-content h2'))
      const result = headers.map(el => {
        const text = el.textContent.trim()
        const id = el.id || el.getAttribute('id') || text.toLowerCase().replace(/\s+/g, '-')
        const level = Number(el.tagName[1])
        const hasEmoji = /^[📝🎯📊🚀🔍📚💼🎨📈]\s/.test(text)

        return {
          id,
          text: hasEmoji ? text.substring(2).trim() : text,
          level,
          emoji: hasEmoji ? text.substring(0, 2) : ''
        }
      }).filter(heading => heading.id && heading.text) // 过滤掉没有 id 或文本的标题

      console.log('Found headings:', result)
      return result
    }

    const scrollToHeading = (id, href) => {
      if (href) {
        // 如果有链接地址，直接跳转
        window.location.href = href
      } else if (id) {
        // 否则滚动到对应标题
        const element = document.getElementById(id)
        if (element) {
          const offset = element.offsetTop - 100
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          })
          activeId.value = id
          history.pushState(null, null, `#${id}`)
        }
      }
    }

    const setupIntersectionObserver = () => {
      if (observer) {
        observer.disconnect()
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              activeId.value = entry.target.id
            }
          })
        },
        {
          rootMargin: '-100px 0px -70% 0px'
        }
      )

      headings.value.forEach(heading => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.observe(element)
        }
      })
    }

    const updateHeadings = async () => {
      await nextTick()
      const newHeadings = getHeadings()
      console.log('Updating headings:', newHeadings)
      if (newHeadings.length > 0) {
        headings.value = newHeadings
        setupIntersectionObserver()
      }
    }

    onMounted(async () => {
      await updateHeadings()

      // 监听内容变化
      const contentObserver = new MutationObserver(updateHeadings)
      const content = document.querySelector('.theme-default-content')
      if (content) {
        contentObserver.observe(content, {
          childList: true,
          subtree: true
        })
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      headings,
      filteredHeadings,
      activeId,
      scrollToHeading
    }
  }
}
</script>

<style lang="scss">
.theme-container {
  .page {
    padding-left: var(--sidebar-width);
    padding-right: 18rem;
    transition: padding 0.2s ease;
  }

  @media (max-width: 1400px) {
    .page {
      padding-right: 2rem;
    }
  }

  @media (max-width: 959px) {
    .page {
      padding-left: 2rem;
    }
  }

  @media (max-width: 719px) {
    .page {
      padding: 0 1.5rem;
    }
  }
}

// Add optimized heading spacing
.theme-default-content {
  h1 {
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
}

.right-anchor {
  position: fixed;
  top: calc(var(--navbar-height) + 2rem);
  right: 1.5rem;
  width: 16rem;
  max-height: calc(100vh - var(--navbar-height) - 4rem);
  overflow-y: auto;
  background-color: var(--c-bg);
  border-left: 1px solid var(--c-border);
  padding: 0.5rem 0;
  margin-right: 1rem;
  font-size: 14px;
  z-index: 9;

  &-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--c-text-lighter);
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
  }

  &-content {
    padding: 0 0.8rem;
  }

  &-heading {
    display: block;
    color: var(--c-text);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 4px;
    transition: all 0.3s;
    margin: 0.2rem 0;
    padding: 0.35rem 0.6rem;
    line-height: 1.4;
    font-size: 0.9em;

    &:hover {
      color: var(--c-brand);
      background-color: var(--c-bg-light);
    }

    &.active {
      color: var(--c-brand);
      background-color: var(--c-bg-light);
      font-weight: 500;
    }

    &.level-1 {
      font-weight: 600;
      font-size: 1em;
      color: var(--c-text);
      margin-top: 0.5em;
    }

    &.level-2 {
      padding-left: 1rem;
      font-size: 0.9em;
      color: var(--c-text-light);
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--c-border);
    border-radius: 3px;
  }
}

@media (max-width: 1400px) {
  .right-anchor {
    display: none;
  }
}
</style>