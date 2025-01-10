<template>
  <div class="right-anchor" v-if="headers.length">
    <div class="right-anchor-title">ON THIS PAGE</div>
    <div class="right-anchor-content">
      <a
        v-for="header in headers"
        :key="header.title"
        :href="`#${header.slug}`"
        :class="[
          'right-anchor-heading',
          `level-${header.level}`,
          { active: activeHash === `#${header.slug}` }
        ]"
        @click.prevent="scrollToHeader(header.slug)"
      >
        {{ header.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightToc',
  data() {
    return {
      headers: [],
      activeHash: '',
      observer: null,
    }
  },
  mounted() {
    this.headers = this.getHeaders()
    this.setActiveHash()
    this.setupIntersectionObserver()
    window.addEventListener('hashchange', this.onHashChange)
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
    window.removeEventListener('hashchange', this.onHashChange)
  },
  methods: {
    getHeaders() {
      const page = this.$page
      if (!page || !page.headers) return []
      // 只获取 1-3 级标题
      return page.headers
        .filter(header => header.level <= 3)
        .map(header => ({
          ...header,
          slug: this.slugify(header.title)
        }))
    },
    slugify(str) {
      return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
    },
    scrollToHeader(slug) {
      const element = document.getElementById(slug)
      if (element) {
        const offset = element.offsetTop - 100
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        })
        this.activeHash = `#${slug}`
        history.pushState(null, null, `#${slug}`)
      }
    },
    setActiveHash() {
      this.activeHash = decodeURIComponent(window.location.hash)
    },
    onHashChange() {
      this.setActiveHash()
    },
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeHash = `#${entry.target.id}`
            }
          })
        },
        {
          rootMargin: '-100px 0px -70% 0px'
        }
      )

      this.headers.forEach(header => {
        const element = document.getElementById(header.slug)
        if (element) {
          this.observer.observe(element)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.right-anchor {
  position: fixed;
  top: calc(var(--navbar-height) + 2rem);
  right: 1.5rem;
  width: 18rem;
  max-height: calc(100vh - var(--navbar-height) - 4rem);
  overflow-y: auto;
  background-color: var(--c-bg);
  border-left: 1px solid var(--c-border);
  padding: 0.5rem 0;
  margin-right: 1rem;
  font-size: 14px;

  .right-anchor-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-text);
    padding: 0.5rem 1.5rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid var(--c-border);
  }

  .right-anchor-content {
    padding: 0 1rem;
  }

  .right-anchor-heading {
    display: block;
    padding: 0.4rem 0.6rem;
    line-height: 1.5;
    color: var(--c-text);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 4px;
    transition: all 0.3s;
    margin: 0.2rem 0;

    &:hover {
      color: var(--c-brand);
      background-color: var(--c-bg-light);
    }

    &.active {
      color: var(--c-brand);
      background-color: var(--c-bg-light);
      font-weight: 600;
    }

    &.level-1 {
      font-weight: 600;
      font-size: 0.95em;
    }

    &.level-2 {
      padding-left: 1.2rem;
      font-size: 0.9em;
    }

    &.level-3 {
      padding-left: 2rem;
      font-size: 0.85em;
      color: var(--c-text-light);
    }
  }
}
</style>