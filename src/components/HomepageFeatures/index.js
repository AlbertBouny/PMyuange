import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '产品经理基础',
    description: (
      <>
        从角色定义、基本技能到方法论，全面掌握产品经理的基础知识和必备技能。
      </>
    ),
    link: '/docs/1.pm-basics/intro',
  },
  {
    title: '电商产品经理',
    description: (
      <>
        深入电商领域的核心业务、运营策略、数据分析和平台治理等专业知识。
      </>
    ),
    link: '/docs/2.ecommerce/intro',
  },
  {
    title: '供应链产品经理',
    description: (
      <>
        掌握供应链管理系统的设计与实现，包括WMS、TMS等核心系统的开发与优化。
      </>
    ),
    link: '/docs/3.supply-chain/README',
  },
  {
    title: '产品求职',
    description: (
      <>
        从简历准备到面试技巧，帮助你在产品经理职业道路上更进一步。
      </>
    ),
    link: '/docs/4.job-hunting/intro',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link} className={styles.featureLink}>
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
