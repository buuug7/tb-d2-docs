import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';




const FeatureList = [
  {
    title: '掉率修正',
    Svg: require('@site/static/assets/feature1.jpg').default,
    description: (
      <>
        掉率修正，完美掉落, 物品掉落二次优化, MF 线性曲线优化，无限灌注, 打孔, 洗点，个人化.
      </>
    ),
  },
  {
    title: '大箱子大背包',
    Svg: require('@site/static/assets/feature2.jpg').default,
    description: (
      <>
        大箱子, 大背包, 储物箱分页, 快速存取, 集成 D2DX, D2GL, 高清版本, 高清字体.
      </>
    ),
  },
  {
    title: '更多物品',
    Svg: require('@site/static/assets/feature3.jpg').default,
    description: (
      <>
        新增暗金多种暗金物品，新增史诗暗金，新增技能书掉落, 支配护身符, 双倍掉落护身符等，各种场景
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  console.log(`svg`, Svg)
  return (
    <div className={clsx('col col--4')}>
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
