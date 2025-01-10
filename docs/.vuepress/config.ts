import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
  base: '/PMyuange/',
  bundler: viteBundler({
    viteOptions: {
      server: {
        hmr: {
          overlay: false
        }
      }
    }
  }),
  plugins: [
    mdEnhancePlugin({
      mermaid: true
    }),
  ],
  lang: 'zh-CN',
  title: 'PM 知识库',
  description: '产品经理必备知识库',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/yourusername/pm-wiki',
    docsDir: 'docs',
    editLink: false,
    lastUpdated: true,
    contributors: false,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '快速开始',
        link: '/pm-basics/quick-start.html',
      },
      {
        text: '产品经理基础',
        link: '/pm-basics/',
      },
      {
        text: '电商产品',
        link: '/ecommerce/',
      },
      {
        text: '供应链产品',
        link: '/supply-chain/',
      },
      {
        text: '求职面试',
        link: '/job-hunting/',
      },
    ],
    sidebar: {
      '/pm-basics/': [
        {
          text: '角色认知',
          collapsible: true,
          children: [
            {
              text: '岗位定义',
              collapsible: true,
              children: [
                { text: '岗位职责', link: '/pm-basics/role-definition/definition/岗位职责.html' },
                { text: '工作内容', link: '/pm-basics/role-definition/definition/工作内容.html' },
              ]
            },
            {
              text: '协作关系',
              collapsible: true,
              children: [
                { text: '与研发协作', link: '/pm-basics/role-definition/collaboration/与研发协作.html' },
                { text: '与设计协作', link: '/pm-basics/role-definition/collaboration/与设计协作.html' },
                { text: '与运营协作', link: '/pm-basics/role-definition/collaboration/与运营协作.html' },
                { text: '与业务方协作', link: '/pm-basics/role-definition/collaboration/与业务方协作.html' },
              ]
            },
            {
              text: '日常工作',
              children: [
                '/pm-basics/role-definition/daily-work/需求管理.md',
                '/pm-basics/role-definition/daily-work/项目推进.md',
                '/pm-basics/role-definition/daily-work/产品规划.md',
                '/pm-basics/role-definition/daily-work/数据分析.md',
              ]
            },
            {
              text: '能力要求',
              children: [
                '/pm-basics/role-definition/competency/软技能.md',
                '/pm-basics/role-definition/competency/硬技能.md',
              ]
            },
          ]
        },
        {
          text: '基本技能',
          collapsible: true,
          children: [
            {
              text: '分析能力',
              children: [
                '/pm-basics/basic-skills/analysis/商业模式分析.md',
                '/pm-basics/basic-skills/analysis/竞品分析.md',
                '/pm-basics/basic-skills/analysis/5W2H分析.md',
              ]
            },
            {
              text: '项目管理',
              children: [
                '/pm-basics/basic-skills/project/项目管理.md',
                '/pm-basics/basic-skills/project/敏捷开发.md',
                '/pm-basics/basic-skills/project/项目估算.md',
                '/pm-basics/basic-skills/project/项目复盘.md',
              ]
            },
            {
              text: '原型设计',
              children: [
                '/pm-basics/basic-skills/prototype/交互设计.md',
                '/pm-basics/basic-skills/prototype/信息架构.md',
                '/pm-basics/basic-skills/prototype/原型规范.md',
              ]
            },
            {
              text: '用户研究',
              children: [
                '/pm-basics/basic-skills/user-research/用户画像.md',
                '/pm-basics/basic-skills/user-research/用户访谈.md',
                '/pm-basics/basic-skills/user-research/问卷调研.md',
                '/pm-basics/basic-skills/user-research/用户旅程图.md',
              ]
            },
          ]
        },
        {
          text: '方法论',
          collapsible: true,
          children: [
            {
              text: '规划方法',
              children: [
                '/pm-basics/methodologies/planning/产品规划.md',
                '/pm-basics/methodologies/planning/版本规划.md',
              ]
            },
            {
              text: '需求方法',
              children: [
                '/pm-basics/methodologies/requirements/需求分析.md',
                '/pm-basics/methodologies/requirements/需求收集.md',
                '/pm-basics/methodologies/requirements/需求管理.md',
              ]
            },
            {
              text: '生命周期',
              children: [
                '/pm-basics/methodologies/lifecycle/产品生命周期.md',
              ]
            },
            {
              text: '战略方法',
              children: [
                '/pm-basics/methodologies/strategy/商业模式.md',
                '/pm-basics/methodologies/strategy/产品战略.md',
              ]
            },
          ]
        },
        {
          text: '工具使用',
          collapsible: true,
          children: [
            {
              text: '协作工具',
              children: [
                '/pm-basics/tools/collaboration/飞书.md',
                '/pm-basics/tools/collaboration/企业微信.md',
                '/pm-basics/tools/collaboration/钉钉.md',
                '/pm-basics/tools/collaboration/Confluence.md',
              ]
            },
            {
              text: '分析工具',
              children: [
                '/pm-basics/tools/analysis/SQL.md',
                '/pm-basics/tools/analysis/Excel.md',
              ]
            },
            {
              text: '项目工具',
              children: [
                '/pm-basics/tools/project/JIRA.md',
                '/pm-basics/tools/project/禅道.md',
              ]
            },
            {
              text: '原型工具',
              children: [
                '/pm-basics/tools/prototype/Axure.md',
                '/pm-basics/tools/prototype/Figma.md',
                '/pm-basics/tools/prototype/墨刀.md',
              ]
            },
          ]
        },
        {
          text: '文档写作',
          collapsible: true,
          children: [
            {
              text: '项目文档',
              children: [
                '/pm-basics/documentation/project/总结复盘.md',
                '/pm-basics/documentation/project/项目计划.md',
              ]
            },
            {
              text: '设计文档',
              children: [
                '/pm-basics/documentation/design/原型设计.md',
                '/pm-basics/documentation/design/界面设计.md',
                '/pm-basics/documentation/design/信息架构.md',
                '/pm-basics/documentation/design/功能设计.md',
                '/pm-basics/documentation/design/交互设计.md',
              ]
            },
            {
              text: 'PRD文档',
              children: [
                '/pm-basics/documentation/prd/PRD模板.md',
                '/pm-basics/documentation/prd/PRD写作规范.md',
              ]
            },
            {
              text: '需求文档',
              children: [
                '/pm-basics/documentation/requirements/MRD.md',
                '/pm-basics/documentation/requirements/BRD.md',
              ]
            },
          ]
        },
      ],
      '/ecommerce/': [
        {
          text: '基础知识',
          collapsible: true,
          children: [
            {
              text: '行业认知',
              collapsible: false,
              children: [
                '/ecommerce/basic/industry/行业现状分析.md',
                '/ecommerce/basic/industry/发展趋势.md',
              ]
            },
            {
              text: '生态体系',
              collapsible: false,
              children: [
                '/ecommerce/basic/ecosystem/平台型电商.md',
                '/ecommerce/basic/ecosystem/垂直电商.md',
                '/ecommerce/basic/ecosystem/内容电商.md',
                '/ecommerce/basic/ecosystem/社区电商.md',
                '/ecommerce/basic/ecosystem/社交电商.md',
              ]
            },
            {
              text: '商业模式',
              collapsible: false,
              children: [
                '/ecommerce/basic/business-model/B2B模式分析.md',
                '/ecommerce/basic/business-model/B2C模式分析.md',
                '/ecommerce/basic/business-model/C2C模式分析.md',
                '/ecommerce/basic/business-model/O2O模式分析.md',
                '/ecommerce/basic/business-model/新零售模式.md',
                '/ecommerce/basic/business-model/跨境电商.md',
                '/ecommerce/basic/business-model/直播电商模式分析.md',
                '/ecommerce/basic/business-model/内容电商模式分析.md',
                '/ecommerce/basic/business-model/私域电商模式分析.md',
                '/ecommerce/basic/business-model/社区团购模式分析.md',
              ]
            }
          ]
        },
        {
          text: '核心业务',
          collapsible: true,
          children: [
            {
              text: '店铺管理',
              collapsible: false,
              children: [
                '/ecommerce/core-business/store/店铺体系设计.md',
                '/ecommerce/core-business/store/商家管理.md',
                '/ecommerce/core-business/store/店铺运营.md',
                '/ecommerce/core-business/store/店铺评价.md',
                '/ecommerce/core-business/store/店铺装修.md',
                '/ecommerce/core-business/store/店铺分级.md',
                '/ecommerce/core-business/store/考核体系.md',
              ]
            },
            {
              text: '会员管理',
              collapsible: false,
              children: [
                '/ecommerce/core-business/member/会员等级设计.md',
                '/ecommerce/core-business/member/成长体系.md',
                '/ecommerce/core-business/member/权益体系.md',
                '/ecommerce/core-business/member/服务体系.md',
                '/ecommerce/core-business/member/积分体系.md',
                '/ecommerce/core-business/member/营销体系.md',
                '/ecommerce/core-business/member/黑客增长.md',
              ]
            },
            {
              text: '交易管理',
              collapsible: false,
              children: [
                '/ecommerce/core-business/transaction/购物流程设计.md',
                '/ecommerce/core-business/transaction/订单系统.md',
                '/ecommerce/core-business/transaction/支付系统.md',
                '/ecommerce/core-business/transaction/物流系统.md',
                '/ecommerce/core-business/transaction/营销系统.md',
                '/ecommerce/core-business/transaction/会员体系.md',
                '/ecommerce/core-business/transaction/售后系统.md',
              ]
            },
            {
              text: '商品管理',
              collapsible: false,
              children: [
                '/ecommerce/core-business/product/商品分类体系.md',
                '/ecommerce/core-business/product/商品属性体系.md',
                '/ecommerce/core-business/product/SKU管理.md',
                '/ecommerce/core-business/product/价格体系.md',
                '/ecommerce/core-business/product/库存管理.md',
              ]
            }
          ]
        },
        {
          text: '运营管理',
          collapsible: true,
          children: [
            {
              text: '用户运营',
              collapsible: false,
              children: [
                '/ecommerce/operations/01-user/用户运营指标体系.md',
                '/ecommerce/operations/01-user/用户增长策略.md',
                '/ecommerce/operations/01-user/用户分层运营.md',
                '/ecommerce/operations/01-user/用户留存方案.md',
                '/ecommerce/operations/01-user/用户活跃度提升.md',
              ]
            },
            {
              text: '商品运营',
              collapsible: false,
              children: [
                '/ecommerce/operations/02-product/选品策略.md',
                '/ecommerce/operations/02-product/商品运营策略.md',
                '/ecommerce/operations/02-product/商品陈列.md',
                '/ecommerce/operations/02-product/橱窗设计.md',
                '/ecommerce/operations/02-product/商品推荐.md',
              ]
            },
            {
              text: '活动运营',
              collapsible: false,
              children: [
                '/ecommerce/operations/03-activity/促销方案设计.md',
                '/ecommerce/operations/03-activity/营销活动.md',
                '/ecommerce/operations/03-activity/节日营销.md',
                '/ecommerce/operations/03-activity/主题营销.md',
              ]
            },
            {
              text: '内容运营',
              collapsible: false,
              children: [
                '/ecommerce/operations/04-content/内容策划.md',
                '/ecommerce/operations/04-content/图文内容.md',
                '/ecommerce/operations/04-content/短视频营销.md',
                '/ecommerce/operations/04-content/直播带货.md',
              ]
            }
          ]
        },
        {
          text: '数据分析',
          collapsible: true,
          children: [
            '/ecommerce/data-analysis/用户数据分析.md',
            '/ecommerce/data-analysis/商品数据分析.md',
            '/ecommerce/data-analysis/交易数据分析.md',
            '/ecommerce/data-analysis/营销数据分析.md',
          ]
        },
        {
          text: '治理体系',
          collapsible: true,
          children: [
            '/ecommerce/governance/平台规则体系.md',
            '/ecommerce/governance/质量管理.md',
            '/ecommerce/governance/风控体系.md',
          ]
        },
        {
          text: '平台架构',
          collapsible: true,
          children: [
            '/ecommerce/architecture/技术架构设计.md',
          ]
        },
        {
          text: '案例分析',
          collapsible: true,
          children: [
            '/ecommerce/case-study/平台案例分析.md',
            '/ecommerce/case-study/创新电商案例.md',
            '/ecommerce/case-study/垂直电商案例.md',
          ]
        }
      ],
      '/supply-chain/': [
        {
          text: '业务管理',
          collapsible: true,
          children: [
            {
              text: '采购管理',
              children: [
                '/supply-chain/business/procurement/供应商管理.md',
                '/supply-chain/business/procurement/采购计划.md',
                '/supply-chain/business/procurement/询价比价.md',
                '/supply-chain/business/procurement/合同管理.md',
                '/supply-chain/business/procurement/采购结算.md',
              ]
            },
            {
              text: '仓储管理',
              children: [
                '/supply-chain/business/warehouse/入库作业.md',
                '/supply-chain/business/warehouse/库内作业.md',
                '/supply-chain/business/warehouse/出库作业.md',
                '/supply-chain/business/warehouse/库存控制.md',
                '/supply-chain/business/warehouse/盘点管理.md',
              ]
            },
            {
              text: '物流管理',
              children: [
                '/supply-chain/business/logistics/运力管理.md',
                '/supply-chain/business/logistics/配送计划.md',
                '/supply-chain/business/logistics/路线优化.md',
                '/supply-chain/business/logistics/配送监控.md',
                '/supply-chain/business/logistics/末端配送.md',
                '/supply-chain/business/logistics/配送调度.md',
                '/supply-chain/business/logistics/配送绩效.md',
              ]
            },
            {
              text: '库存管理',
              children: [
                '/supply-chain/business/inventory/库存预警.md',
                '/supply-chain/business/inventory/补货策略.md',
                '/supply-chain/business/inventory/库存盘点.md',
                '/supply-chain/business/inventory/库存规划.md',
                '/supply-chain/business/inventory/库存调拨.md',
                '/supply-chain/business/inventory/库存分析.md',
                '/supply-chain/business/inventory/库存成本.md',
                '/supply-chain/business/inventory/库存报表.md',
              ]
            },
          ]
        },
        {
          text: '数字化转型',
          collapsible: true,
          children: [
            {
              text: '智能仓储',
              children: [
                '/supply-chain/digital/smart-warehouse/自动化设备.md',
                '/supply-chain/digital/smart-warehouse/AGV应用.md',
                '/supply-chain/digital/smart-warehouse/机器人应用.md',
                '/supply-chain/digital/smart-warehouse/智能分拣.md',
              ]
            },
            {
              text: '智慧物流',
              children: [
                '/supply-chain/digital/smart-logistics/智能调度.md',
                '/supply-chain/digital/smart-logistics/智能路径.md',
                '/supply-chain/digital/smart-logistics/无人配送.md',
                '/supply-chain/digital/smart-logistics/可视化监控.md',
              ]
            },
            {
              text: '数据应用',
              children: [
                '/supply-chain/digital/data-application/需求预测.md',
                '/supply-chain/digital/data-application/库存优化.md',
                '/supply-chain/digital/data-application/路径规划.md',
                '/supply-chain/digital/data-application/成本分析.md',
              ]
            },
          ]
        },
        {
          text: '系统建设',
          collapsible: true,
          children: [
            {
              text: 'ERP系统',
              children: [
                '/supply-chain/system/erp/系统架构.md',
                '/supply-chain/system/erp/核心模块.md',
                '/supply-chain/system/erp/业务流程.md',
                '/supply-chain/system/erp/系统集成.md',
              ]
            },
            {
              text: 'WMS系统',
              children: [
                '/supply-chain/system/wms/仓储规划.md',
                '/supply-chain/system/wms/作业管理.md',
                '/supply-chain/system/wms/库存管理.md',
                '/supply-chain/system/wms/绩效管理.md',
              ]
            },
            {
              text: 'TMS系统',
              children: [
                '/supply-chain/system/tms/运输管理.md',
                '/supply-chain/system/tms/配送管理.md',
                '/supply-chain/system/tms/成本管理.md',
                '/supply-chain/system/tms/轨迹跟踪.md',
              ]
            },
            {
              text: '协同平台',
              children: [
                '/supply-chain/system/collaboration/供应商协同.md',
                '/supply-chain/system/collaboration/供应商管理.md',
                '/supply-chain/system/collaboration/客户协同.md',
                '/supply-chain/system/collaboration/客户管理.md',
                '/supply-chain/system/collaboration/物流协同.md',
                '/supply-chain/system/collaboration/信息共享.md',
              ]
            },
          ]
        },
      ],
      '/job-hunting/': [
        {
          text: '简历准备',
          collapsible: true,
          children: [
            {
              text: '简历模板',
              children: [
                { text: '产品经理简历模板', link: '/job-hunting/resume/templates/产品经理简历模板.html' },
                { text: '不同方向简历模板', link: '/job-hunting/resume/templates/不同方向简历模板.html' },
                { text: '不同工作年限模板', link: '/job-hunting/resume/templates/不同工作年限模板.html' },
              ]
            },
            {
              text: '撰写指南',
              children: [
                { text: '简历写作技巧', link: '/job-hunting/resume/writing-skills/README.html' },
                { text: '项目案例展示', link: '/job-hunting/resume/cases/README.html' },
              ]
            },
          ]
        },
        {
          text: '面试准备',
          collapsible: true,
          children: [
            {
              text: '面试流程',
              children: [
                { text: '面试环节介绍', link: '/job-hunting/interview/process/面试流程.html' },
                { text: '面试评估标准', link: '/job-hunting/interview/process/评估标准.html' },
              ]
            },
            {
              text: '面试技巧',
              children: [
                { text: '自我介绍', link: '/job-hunting/interview/skills/自我介绍.html' },
                { text: '回答技巧', link: '/job-hunting/interview/skills/回答技巧.html' },
              ]
            },
            {
              text: '面试题库',
              children: [
                { text: '产品设计题', link: '/job-hunting/interview/questions/产品设计.html' },
                { text: '需求分析题', link: '/job-hunting/interview/questions/需求分析.html' },
                { text: '数据分析题', link: '/job-hunting/interview/questions/数据分析.html' },
              ]
            },
            {
              text: '实战演练',
              children: [
                { text: '模拟面试', link: '/job-hunting/interview/practice/模拟面试.html' },
                { text: '案例分析', link: '/job-hunting/interview/practice/案例分析.html' },
              ]
            },
          ]
        },
        {
          text: '案例研究',
          collapsible: true,
          children: [
            {
              text: '真实案例',
              children: [
                { text: '产品改进', link: '/job-hunting/case-study/real-cases/产品改进.html' },
                { text: '新功能设计', link: '/job-hunting/case-study/real-cases/新功能设计.html' },
              ]
            },
            {
              text: '解决方案',
              children: [
                { text: '问题诊断', link: '/job-hunting/case-study/solutions/问题诊断.html' },
                { text: '方案设计', link: '/job-hunting/case-study/solutions/方案设计.html' },
              ]
            },
            {
              text: '产品分析',
              children: [
                { text: '竞品分析', link: '/job-hunting/case-study/product-analysis/竞品分析.html' },
                { text: '用户研究', link: '/job-hunting/case-study/product-analysis/用户研究.html' },
              ]
            },
          ]
        },
        {
          text: '职业发展',
          collapsible: true,
          children: [
            {
              text: '职业规划',
              children: [
                { text: '发展路径', link: '/job-hunting/career/planning/发展路径.html' },
                { text: '能力提升', link: '/job-hunting/career/planning/能力提升.html' },
              ]
            },
            {
              text: '职场经验',
              children: [
                { text: '面试心得', link: '/job-hunting/career/experience/面试心得.html' },
                { text: '职场故事', link: '/job-hunting/career/experience/职场故事.html' },
                { text: '求职经验', link: '/job-hunting/career/experience/求职经验.html' },
              ]
            },
            {
              text: '能力提升',
              children: [
                { text: '核心竞争力', link: '/job-hunting/career/improvement/核心竞争力.html' },
                { text: '学习资源', link: '/job-hunting/career/improvement/学习资源.html' },
              ]
            },
            {
              text: '薪资谈判',
              children: [
                { text: '薪资策略', link: '/job-hunting/career/negotiation/薪资策略.html' },
                { text: '谈判技巧', link: '/job-hunting/career/negotiation/谈判技巧.html' },
              ]
            },
          ]
        },
        {
          text: '求职渠道',
          collapsible: true,
          children: [
            {
              text: '内推渠道',
              children: [
                { text: '内推平台', link: '/job-hunting/channels/internal/内推平台.html' },
                { text: '内推技巧', link: '/job-hunting/channels/internal/内推技巧.html' },
              ]
            },
            {
              text: '招聘渠道',
              children: [
                { text: '招聘网站', link: '/job-hunting/channels/recruitment/招聘网站.html' },
                { text: '求职技巧', link: '/job-hunting/channels/recruitment/求职技巧.html' },
              ]
            },
          ]
        },
      ],
    },
  }),
  alias: {
    '@theme/Layout.vue': path.resolve(__dirname, './theme/layouts/Layout.vue'),
  },
})
