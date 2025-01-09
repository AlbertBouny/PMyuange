/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '产品经理基础',
      items: [
        '1.pm-basics/intro',
      ],
    },
    {
      type: 'category',
      label: '电商产品经理',
      items: [
        '2.ecommerce/intro',
      ],
    },
    {
      type: 'category',
      label: '供应链产品经理',
      items: [
        '3.supply-chain/README',
        {
          type: 'category',
          label: '行业知识',
          items: [
            '3.supply-chain/01-industry/intro',
          ],
        },
        {
          type: 'category',
          label: '业务管理',
          items: [
            '3.supply-chain/02-business/intro',
          ],
        },
        {
          type: 'category',
          label: '系统设计',
          items: [
            '3.supply-chain/03-system/02-wms/库存管理',
            '3.supply-chain/03-system/03-tms/配送管理',
            '3.supply-chain/03-system/04-collaboration/供应商管理',
            '3.supply-chain/03-system/04-collaboration/客户协同',
            '3.supply-chain/03-system/04-collaboration/供应商协同',
          ],
        },
        {
          type: 'category',
          label: '数字化',
          items: [
            '3.supply-chain/04-digital/intro',
          ],
        },
        {
          type: 'category',
          label: '优化',
          items: [
            '3.supply-chain/05-optimization/intro',
          ],
        },
        {
          type: 'category',
          label: '案例研究',
          items: [
            '3.supply-chain/06-case-study/intro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '产品求职',
      items: [
        '4.job-hunting/intro',
      ],
    },
  ],
};

module.exports = sidebars;
