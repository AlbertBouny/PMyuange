import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
  base: '/PMyuange/',
  lang: 'zh-CN',
  title: 'PM 知识库',
  description: '产品经理必备知识库',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: 'PM基础',
        children: [
          {
            text: '角色认知',
            children: [
              { text: '产品经理定义', link: '/1.pm-basics/01-role-definition/01-definition/产品经理的定义' },
              { text: '岗位职责', link: '/1.pm-basics/01-role-definition/01-definition/岗位职责' },
              { text: '工作内容', link: '/1.pm-basics/01-role-definition/01-definition/工作内容' }
            ]
          },
          {
            text: '基本技能',
            children: [
              { text: 'SWOT分析', link: '/1.pm-basics/02-basic-skills/01-analysis/SWOT分析' },
              { text: '5W2H分析', link: '/1.pm-basics/02-basic-skills/01-analysis/5W2H分析' },
              { text: '竞品分析', link: '/1.pm-basics/02-basic-skills/01-analysis/竞品分析' }
            ]
          }
        ]
      },
      {
        text: '电商领域',
        children: [
          {
            text: '行业基础',
            children: [
              { text: '行业发展', link: '/2.ecommerce/01-basic/01-industry/行业发展历程' },
              { text: '现状分析', link: '/2.ecommerce/01-basic/01-industry/行业现状分析' },
              { text: '发展趋势', link: '/2.ecommerce/01-basic/01-industry/发展趋势' }
            ]
          }
        ]
      },
      {
        text: '供应链',
        children: [
          { text: '基础知识', link: '/3.supply-chain/01-basic/' },
          { text: '业务流程', link: '/3.supply-chain/02-process/' },
          { text: '系统架构', link: '/3.supply-chain/03-system/' }
        ]
      },
      {
        text: '求职指南',
        children: [
          {
            text: '简历准备',
            children: [
              { text: '不同工作年限模板', link: '/4.job-hunting/01-resume/01-templates/不同工作年限模板' },
              { text: '不同方向简历模板', link: '/4.job-hunting/01-resume/01-templates/不同方向简历模板' }
            ]
          },
          { text: '面试技巧', link: '/4.job-hunting/02-interview/' },
          { text: '职业发展', link: '/4.job-hunting/03-career/' }
        ]
      },
      {
        text: '资源中心',
        children: [
          { text: '推荐书籍', link: '/resources/books' },
          { text: '实用工具', link: '/resources/tools' },
          { text: '学习路径', link: '/resources/learning-path' }
        ]
      }
    ],
    
    sidebar: {
      '/1.pm-basics/': [
        {
          text: 'PM基础',
          collapsible: true,
          children: [
            '/1.pm-basics/intro',
            {
              text: '角色定义',
              collapsible: true,
              children: [
                '/1.pm-basics/01-role-definition/01-definition/产品经理的定义',
                '/1.pm-basics/01-role-definition/01-definition/岗位职责',
                '/1.pm-basics/01-role-definition/01-definition/工作内容'
              ]
            },
            {
              text: '基本技能',
              collapsible: true,
              children: [
                '/1.pm-basics/02-basic-skills/01-analysis/SWOT分析',
                '/1.pm-basics/02-basic-skills/01-analysis/5W2H分析',
                '/1.pm-basics/02-basic-skills/01-analysis/竞品分析'
              ]
            }
          ]
        }
      ],
      '/2.ecommerce/': [
        {
          text: '电商领域',
          collapsible: true,
          children: [
            '/2.ecommerce/intro',
            {
              text: '行业基础',
              collapsible: true,
              children: [
                '/2.ecommerce/01-basic/01-industry/行业发展历程',
                '/2.ecommerce/01-basic/01-industry/行业现状分析',
                '/2.ecommerce/01-basic/01-industry/发展趋势'
              ]
            }
          ]
        }
      ],
      '/4.job-hunting/': [
        {
          text: '求职指南',
          collapsible: true,
          children: [
            {
              text: '简历准备',
              collapsible: true,
              children: [
                '/4.job-hunting/01-resume/01-templates/不同工作年限模板',
                '/4.job-hunting/01-resume/01-templates/不同方向简历模板'
              ]
            },
            {
              text: '面试技巧',
              collapsible: true,
              children: [
                '/4.job-hunting/02-interview/准备工作',
                '/4.job-hunting/02-interview/常见问题'
              ]
            },
            {
              text: '职业发展',
              collapsible: true,
              children: [
                '/4.job-hunting/03-career/职业规划',
                '/4.job-hunting/03-career/晋升路径'
              ]
            }
          ]
        }
      ]
    },
    
    editLink: false,
    lastUpdated: true,
    contributors: false,
    colorMode: 'auto',
    colorModeSwitch: true,
    home: '/',
    sidebarDepth: 3,
    repo: 'AlbertBouny/PMyuange',
    docsDir: 'docs'
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档'
        }
      },
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? []
    }),
    mediumZoomPlugin({
      zoomOptions: {
        margin: 24,
        background: '#fff',
        scrollOffset: 0
      }
    })
  ]
}) 