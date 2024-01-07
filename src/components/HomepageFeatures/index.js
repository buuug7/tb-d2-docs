import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';




const FeatureList = [

  {
    title: '大箱子大背包',
    Svg: require('@site/static/assets/feature2.jpg').default,
    description: (
      <>
        大箱子, 大背包, 储物箱分页, 集成 D2DX, D2GL, 高清版本, 高清字体.
      </>
    ),
  },
  {
    title: '掉率修正',
    Svg: require('@site/static/assets/feature1.jpg').default,
    description: (
      <>
        物品掉落二次优化, MF 线性曲线优化，灌注, 打孔, 洗点，个人化.
      </>
    ),
  },
  {
    title: '史诗暗金',
    Svg: require('@site/static/assets/feature4.jpg').default,
    description: (
      <>
        史诗暗金，所有变量都是 MAX, 固定 2 孔, 可以通过附魔增强，附魔后属性非常强大华丽
      </>
    ),
  },
  {
    title: '更多特性',
    Svg: require('@site/static/assets/feature3.jpg').default,
    description: (
      <>
        新增多种暗金，多种物品支持附魔, 技能书, 支配护身符, 双倍掉落护身符等，各种高级场景
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  console.log(`svg`, Svg)
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
