import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { qqLink, qqGroupNumber } from "../config/index.js";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.overlay} />
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__">
          <span>QQ 群号 {qqGroupNumber}</span>{" "}
          <span className="margin-horiz--sm">d2.yoursoups.com</span>
        </p>
        <hr />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--outline2  button--lg margin-horiz--sm"
            href={qqLink}
          >
            添加QQ群
          </Link>
          <Link
            className="button button--secondary button--outline2 button--lg margin-horiz--sm"
            to="/docs/tubieDocs/intro"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div style={{ position: "relative" }}>
        <HomepageHeader />
      </div>
      <main>
        <section className="container my-4">
          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>自定义红门</h1>
              <p>
                新增普通红门，包括火门，电门，冰门，毒门，魔门，肉门，场景等级为
                100 等级。 除了普通红门，还引入了 105
                等级场景的高级红门，亚瑞特山脉之巅为爬塔模式, 怪物难度逐层增加,
                物品掉落概率逐层提高。为了增加后期 KC 动力和乐趣,
                专门设置了一个福利门。
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/2.png)`,
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/3.png)`,
                  backgroundPosition: "center center",
                }}
              />
            </div>

            <div className={styles.row1Left}>
              <h1>技能调整</h1>
              <p>
                对法师的闪电系，冰冷系，火焰系做了适当的增强，比如连锁闪电，新星，雷雨风暴等技能的施法范围做了适当增大，
                对冰冷系霜之星星，冰封球等技能的延迟进行了缩短，并新增了几种自定义技能，
                比如暗黑破坏神的大火圈技能，赋予给部分史诗暗金跟部分符文之语以
                CTC 方式触发
              </p>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>多倍怪物场景</h1>
              <p>
                普通难度怪物数量 2 倍，噩梦难度怪物数量 3 倍，地狱难度怪物数量 5
                倍, 其中牛场怪物数量为 8 倍,
                普通噩梦地狱三个难度场景怪物的血量跟防御经验都做了增强
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/5.png)`,
                  backgroundPosition: "center center",
                }}
              />
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/4.png)`,
                  backgroundPosition: "center bottom",
                }}
              />
            </div>
            <div className={styles.row1Left}>
              <h1>新增符文之语</h1>
              <p>
                除了原版神符之语, 我们还增加了下面 40 个符文之语, 均为北方暴雪于
                2001-2005
                年预制作，这些新增的符文之语针对各个职业的特点做了平衡设计，特性非常强大，比如惩罚
                Punishment，欺暪 Deception，海妖之歌 Siren's Song 等
              </p>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>史诗暗金</h1>
              <p>
                史诗暗金是对原版暗金的增强, 掉落后属性跟原版暗金基本一致,
                所有变量都设置为 MAX, 插槽通常为 1-MAX 孔,
                可以通过附魔的方式增强它, 大多数史诗暗金只在 99+ 场景掉落,
                少部分在 95+ 场景掉落. 史诗暗金附魔次数限定在 20 次,
                史诗暗金物品 + 原版暗金物品 + 26# =
                强化后的史诗暗金(可附魔多次).
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/1.png)`,
                  backgroundPosition: "center bottom",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
