import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { qqLink, qqGroupNumber, websiteAddress } from "../config/index.js";

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
          {/* <span className="margin-horiz--sm">{websiteAddress}</span> */}
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
                地穴二层开启中级装备狩猎，六大元素红门专精掉落史诗装备，各需对应元素抗性。亚瑞特山脉之巅
                18 层爬塔模式，40
                级信念考验下产出顶级暗金与灵魂碎片。崔斯特瑞姆疯牛场与维斯特玛红门作为终极试炼，后者需集齐十二元素凭证，独家掉落史诗毁灭与火炬。福利红门为牛场惊喜彩蛋，轻松获取次顶级珍宝。
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/2.jpg)`,
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
                  backgroundImage: `url(/features/index/3.jpg)`,
                  backgroundPosition: "center center",
                }}
              />
            </div>

            <div className={styles.row1Left}>
              <h1>技能调整</h1>
              <p>
                对各职业核心技能进行全方位优化,
                法师强化元素连锁与范围效果，德鲁伊开放变身传送，野蛮人战吼前置简化，亚马逊增强穿透与召唤，圣骑士光环效果升级，死灵法师实现四魔共存，刺客陷阱体系扩容。通过机制改良与数值平衡，显著提升各职业特色玩法的深度与爽快感。
              </p>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>多倍怪物场景</h1>
              <p>
                世界法则已然改变,怪物们获得双倍防御、生命与攻击力，技能造诣更臻化境。精英怪物锋芒毕露，威能更甚往昔。冒险者将面临人海战术的严峻考验,
                普通难度倍增，噩梦三倍丛生，而地狱则涌现五倍之敌（牛场更达八倍之众）。这是对勇者实力与智慧的终极试炼。
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/5.jpg)`,
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
                  backgroundImage: `url(/features/index/4.jpg)`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
            <div className={styles.row1Left}>
              <h1>新增符文之语</h1>
              <p>
                除了原版神符之语, 隆重推出 42
                款匠心独运的符文之语装备，涵盖七大职业专属神器与通用至宝。"悲痛"、"智慧"
                等新手福音让冒险启程更为从容；"胜利"、"复仇"
                则为巅峰勇者提供毁天灭地的力量。每件装备都承载着独特的暗黑传说。职业专属符文语更展现惊人特质,
                这些融合顶级词缀与华丽特效的符文之语，将重新定义庇护之地的力量体系。
              </p>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>史诗暗金</h1>
              <p>
                经典暗金装备现已升华至史诗境界，所有属性均达巅峰数值。这些传世珍宝主要藏于
                99+ 级场景, 部分 94+
                级场景亦有踪迹，包含风之力、格利风之眼等三十余件史诗暗金装备。特别值得一提的是维斯特玛场景专属的史诗毁灭与史诗火炬，它们可通过灵魂宝石进行
                20
                次附魔，逐步解锁元素穿透、攻速加成等超凡属性，成就终极战力的完美形态。
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/1.jpg)`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/6.jpg)`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
            <div className={styles.row1Left}>
              <h1>通用附魔</h1>
              <p>
                通用附魔为装备注入随机属性，史诗暗金享专属强化，特殊定制则打造传世神器。装备品质决定附魔次数，物理系可追求狂热灵气与致命打击，法系专享信念光环与元素穿透。史诗毁灭与火炬可通过20次淬炼臻至完美，而收缩戒指与冥府乌鸦更支持无限次定向强化。每一颗灵魂宝石的融合，都是将凡铁锻造成神器的神圣仪式。
              </p>
            </div>
          </div>

          <div className={styles.row1}>
            <div className={styles.row1Left}>
              <h1>成长物品</h1>
              <p>
                比如成长护身符，会随着击杀怪物不断进化。击杀65级以上怪物获得1点经验，83级以上2点，Boss战更可收获等级×10的丰厚回报。每提升5级觉醒一个新属性，最高可拥有75%双倍掉落、50%施法加速等极致属性。但需谨记：死亡将损失1%的成长经验。这件会呼吸的传奇宝物，终将成为冒险者最忠实的成长见证者。
              </p>
            </div>
            <div className={styles.row1Right}>
              <div
                className={styles.row1RightInner}
                style={{
                  backgroundImage: `url(/features/index/7.jpg)`,
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
