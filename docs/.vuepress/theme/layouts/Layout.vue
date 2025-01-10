<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div v-if="$page.frontmatter.home">
          <!-- Hero Section -->
          <div class="hero-section">
            <div class="hero-content">
              <h1>{{ $page.frontmatter.title }}</h1>
              <p class="hero-subtitle">{{ $page.frontmatter.description }}</p>
              <div class="hero-buttons">
                <a :href="$withBase($page.frontmatter.actions[0].link)" class="primary-button">{{ $page.frontmatter.actions[0].text }}</a>
                <a :href="$page.frontmatter.actions[1].link" class="secondary-button" target="_blank">{{ $page.frontmatter.actions[1].text }}</a>
              </div>
            </div>
          </div>

          <!-- Module Introduction -->
          <div class="module-section">
            <div class="module-grid">
              <div class="module-card">
                <div class="module-icon">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6H4m2 3h12v2H6V9m0 4h12v2H6v-2Z"/>
                  </svg>
                </div>
                <h3>产品基础</h3>
                <p>涵盖产品从概念到规划的基本原理，包括需求分析、用户画像等核心知识。系统化的学习路径，助你构建完整的产品思维。</p>
              </div>
              <div class="module-card">
                <div class="module-icon">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 20 4H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                </div>
                <h3>电商产品</h3>
                <p>深入电商领域的核心业务流程，从用户运营到平台治理。结合实际案例，掌握电商产品设计与运营的关键技能。</p>
              </div>
              <div class="module-card">
                <div class="module-icon">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 4a2 2 0 0 0-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5l-3-4h-3V4m-7 2l4 4l-4 4v-3H4V9h6m7 .5h2.5l1.96 2.5H17m-11 6A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z"/>
                  </svg>
                </div>
                <h3>供应链产品</h3>
                <p>全面解析供应链管理系统的设计与实现，从仓储到物流，从采购到库存。掌握智能供应链转型的核心方法。</p>
              </div>
              <div class="module-card">
                <div class="module-icon">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z"/>
                  </svg>
                </div>
                <h3>求职面试</h3>
                <p>一线产品经理的求职经验分享，配合真实案例分析。从简历准备到面试技巧，助你在产品经理求职路上游刃有余。</p>
              </div>
            </div>
          </div>

          <!-- Course Section -->
          <div class="course-section">
            <div class="course-container">
              <div class="course-category">
                <h3>电商产品课程</h3>
                <div class="course-list">
                  <div class="course-card">
                    <div class="course-image">
                      <img src="/PMyuange/images/courses/ecokepic.png" alt="电商产品经理成长训练营" />
                    </div>
                    <div class="course-content">
                      <h4>电商产品经理成长训练营</h4>
                      <p class="course-desc">从入门到进阶，系统掌握电商产品经理必备技能，包括搭建电商全链路产品、各电商子系统设计、电商业务模式拆解等核心内容。</p>
                      <div class="course-meta">
                        <span class="course-duration">
                          <svg class="icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/>
                          </svg>
                          48课时
                        </span>
                        <span class="course-teacher">
                          <svg class="icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
                          </svg>
                          讲师：刘志远，资深产品专家
                        </span>
                      </div>
                      <div class="course-features">
                        <span>搭建电商全链路产品</span>
                        <span>各电商子系统设计</span>
                        <span>电商业务模式拆解</span>
                        <span>实战+案例+业务场景</span>
                        <span>电商产品经理求职指南</span>
                      </div>
                      <a href="https://weike.fm/cdeMu3bd9" class="course-button" target="_blank">立即学习</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="course-category">
                <h3>供应链产品课程</h3>
                <div class="course-list">
                  <div class="course-card">
                    <div class="course-image">
                      <img src="/PMyuange/images/courses/supplyke.png" alt="供应链产品经理进阶训练营" />
                    </div>
                    <div class="course-content">
                      <h4>供应链产品经理进阶训练营</h4>
                      <p class="course-desc">深耕供应链领域，助力全渠道电商&零售供应链数字化。系统掌握供应链管理系统的设计与实现，从采购到仓储，从物流到库存。</p>
                      <div class="course-meta">
                        <span class="course-duration">
                          <svg class="icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"/>
                          </svg>
                          36课时
                        </span>
                        <span class="course-teacher">
                          <svg class="icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
                          </svg>
                          讲师：刘志远，资深产品专家
                        </span>
                      </div>
                      <div class="course-features">
                        <span>供应链数字化体系从入门到精通</span>
                        <span>覆盖采购、订单、WMS、TMS到BMS等核心系统</span>
                        <span>产品逻辑+业务拆解+系统讲解</span>
                        <span>项目实战+供应链知识库</span>
                      </div>
                      <a href="https://weike.fm/CdyS410d42" class="course-button" target="_blank">立即学习</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Popular Content -->
          <div class="popular-section">
            <h2>热门内容推荐</h2>
            <div class="popular-grid">
              <div class="popular-card">
                <div class="card-meta">
                  <span class="module-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6H4m2 3h12v2H6V9m0 4h12v2H6v-2Z"/>
                    </svg>
                    产品基础
                  </span>
                  <span class="heat-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"/>
                    </svg>
                    98
                  </span>
                </div>
                <h3>用户访谈到底怎么做？资深产品经理的实战指南</h3>
                <p>深入解析用户访谈的全流程，从访谈准备到问题设计，从谈话技巧到信息提取，帮你收集到最有价值的用户洞察。</p>
              </div>
              <div class="popular-card">
                <div class="card-meta">
                  <span class="module-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 20 4H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    电商产品
                  </span>
                  <span class="heat-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"/>
                    </svg>
                    85
                  </span>
                </div>
                <h3>私域流量运营实战：从0到1打造高转化社群</h3>
                <p>揭秘头部电商平台的私域流量运营策略，实用的社群运营技巧和转化方法，让你的私域流量效率提升10倍。</p>
              </div>
              <div class="popular-card">
                <div class="card-meta">
                  <span class="module-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M3 4a2 2 0 0 0-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5l-3-4h-3V4m-7 2l4 4l-4 4v-3H4V9h6m7 .5h2.5l1.96 2.5H17m-11 6A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z"/>
                    </svg>
                    供应链产品
                  </span>
                  <span class="heat-tag">
                    <svg class="icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"/>
                    </svg>
                    76
                  </span>
                </div>
                <h3>智能仓储系统设计实战：以某电商仓库为例</h3>
                <p>通过真实案例，详解智能仓储系统的架构设计、作业流程优化、自动化设备选型等关键决策点，助你构建高效仓储方案。</p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <footer class="site-footer">
            <div class="footer-content">
              <div class="copyright">© 2025 远哥的产品私塾 版权所有</div>
              <div class="contact">
                如有问题或建议，请联系我们：
                <a href="mailto:caesarlzy@gmail.com">caesarlzy@gmail.com</a>
              </div>
              <div class="social-links">
                <a href="#" class="social-link">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
                  </svg>
                </a>
                <a href="#" class="social-link">
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
        <template v-else>
          <slot name="top" />
          <Content class="theme-default-content" />
          <slot name="bottom" />
        </template>
      </main>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  }
}
</script>

<style>
.hero-section {
  background: linear-gradient(rgba(26, 54, 93, 0.8), rgba(45, 55, 72, 0.9)), url('/PMyuange/images/hero/hero-office.jpg') no-repeat center center;
  background-size: cover;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  margin: -3.6rem -2rem 2rem -2rem;
  padding: 4rem 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%);
  z-index: 1;
}

.hero-section h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
}

.primary-button, .secondary-button {
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.primary-button {
  background: linear-gradient(135deg, #3eaf7c 0%, #2d8e63 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(62, 175, 124, 0.3);
}

.primary-button:hover {
  background: linear-gradient(135deg, #2d8e63 0%, #236d4d 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(62, 175, 124, 0.4);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Module Section Styles */
.module-section {
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

.module-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.1), transparent);
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.module-card {
  padding: 2.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.module-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.module-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e6f6fe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.module-icon .icon {
  width: 40px;
  height: 40px;
  color: #3b82f6;
}

.module-card h3 {
  color: #1e40af;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  background: linear-gradient(120deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.module-card p {
  color: #4b5563;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Popular Content Styles */
.popular-section {
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
}

.popular-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.1), transparent);
}

.popular-section h2 {
  color: #1e40af;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 800;
  background: linear-gradient(120deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.popular-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  position: relative;
  overflow: hidden;
}

.popular-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popular-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.popular-card:hover::before {
  opacity: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: center;
}

.module-tag, .heat-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
}

.module-tag {
  color: #3b82f6;
  background: #f0f9ff;
}

.heat-tag {
  color: #f97316;
  background: #fff7ed;
}

.icon {
  width: 18px;
  height: 18px;
}

.popular-card h3 {
  color: #1e3a8a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.4;
}

.popular-card p {
  color: #4b5563;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* Footer Styles */
.site-footer {
  background: linear-gradient(to bottom, #1e293b 0%, #0f172a 100%);
  color: #e2e8f0;
  padding: 4rem 2rem;
  margin-top: 0;
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.copyright {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

.contact {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact a {
  color: #60a5fa;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.contact a:hover {
  color: #93c5fd;
  background: rgba(96, 165, 250, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  color: #e2e8f0;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: #60a5fa;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.social-link .icon {
  width: 24px;
  height: 24px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }

  .hero-section h1 {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .module-grid, .popular-grid {
    grid-template-columns: 1fr;
  }

  .popular-section h2 {
    font-size: 2rem;
  }

  .module-card, .popular-card {
    padding: 1.75rem;
  }

  .module-icon {
    width: 64px;
    height: 64px;
  }

  .module-icon .icon {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-section h1 {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .module-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .popular-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Course Section Styles */
.course-section {
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.course-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.1), transparent);
}

.course-container {
  max-width: 1200px;
  margin: 0 auto;
}

.course-category {
  margin-bottom: 4rem;
}

.course-category:last-child {
  margin-bottom: 0;
}

.course-category h3 {
  color: #1e40af;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(120deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.course-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  display: flex;
  gap: 2rem;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.course-image {
  width: 300px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image img {
  transform: scale(1.05);
}

.course-content {
  flex: 1;
}

.course-content h4 {
  color: #1e3a8a;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.course-desc {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.course-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.course-duration, .course-teacher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.course-meta .icon {
  width: 16px;
  height: 16px;
}

.course-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.course-features span {
  background: #f0f9ff;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.course-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.course-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .course-card {
    flex-direction: column;
  }

  .course-image {
    width: 100%;
    height: 240px;
  }
}

@media (max-width: 768px) {
  .course-features {
    flex-direction: column;
    gap: 0.5rem;
  }

  .course-features span {
    text-align: center;
  }

  .course-meta {
    flex-direction: column;
    gap: 0.75rem;
  }

  .course-button {
    width: 100%;
    text-align: center;
  }
}
</style>