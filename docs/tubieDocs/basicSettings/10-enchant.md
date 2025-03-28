# 附魔介绍

支持对暗金物品, 亮金物品, 蓝色物品附魔, 首先使用对应公式开启附魔标记, 然后才可以附魔

目前武器, 盾牌, 盔甲, 头盔, 鞋子, 手套类型的物品支持附魔(后续会支持更多类型的附魔, 比如腰带项链戒指等), 所有附魔次数限制一次(除了特殊附魔), 附魔会随机增加四个属性, 这些属性会从各自类型属性组中随机抽取 4 个, 详情可查看附魔属性分组详情, 暗金, 亮金, 蓝色物品需要通过公式开启附魔标识后才可以附魔.

## 暗金物品

需要通过 暗金物品 + 2 个 世界之石碎片 合成开启附魔标记后才能附魔，附魔公式 暗金物品 + 灵魂宝石 + 28#

## 亮金物品

需要通过 暗金物品 + 3 个 世界之石碎片 合成开启附魔标记后才能附魔，附魔公式 亮金物品 + 灵魂宝石 + 28#

## 蓝色物品

需要通过 暗金物品 + 4 个 世界之石碎片 合成开启附魔标记后才能附魔，附魔公式 蓝色物品 + 灵魂宝石 + 28#

## 特殊附魔

- 收缩戒指支持附魔, 通过跟指节合成来附魔, 指节上的属性会追加到收缩戒指上, 指节在地穴 2,自定义红门掉落
- 冥府乌鸦附魔附魔公式为 `冥府乌鸦 + 附魔护身符 + 灵魂宝石`
  - 使用盒子合成会附带上附魔护身符的属性, 除了加所有技能最多只能附魔 3 次, 其他附魔不限制次数
  - 比如附魔 115 级护身符, 那么附魔公式为 `冥府乌鸦 + 115级附魔护身符 + 15个灵魂宝石`
  - 附魔材料, 地穴 2, 自定义红门掉落
- 神圣拉苏克的斗士(肉搏类), 附魔增加其他 CTC 技能触发概率
  - 伤害加深,尸体爆炸,静态力场,连锁闪电,霜之新星,剧毒新星, 战斗狂嗥,可以通过附魔增加触发概率,限制 150 次附魔
  - 附魔公式:肉搏类神圣拉苏克的斗士 + 带(尸体爆炸,静态力场,连锁闪电,霜之新星,剧毒新星,伤害加深,战斗狂嗥)属性的拉苏克的斗士附魔材料
  - 附魔材料 99+ 场景掉落
- 史诗毁灭, 定制附魔 20 次, 附魔公式 史诗毁灭 + 毁灭 + 3 灵魂宝石
- 史诗火炬, 定制附魔 20 次, 附魔公式 史诗火炬 + 火炬 + 3 灵魂宝石
- 蓝色超大型护身符附魔, 随机增加 1 对应职业单体技能,最多附魔 2 次, (INT3 贡献)
  - 第一次附魔: 蓝色超大型护身符 + 1 职业技能珠宝(95+场景掉落) + r29
  - 第二次附魔: 蓝色超大型护身符 + 1 职业技能珠宝(95+场景掉落) + r30

## 史诗暗金额外的补充附魔

除了史诗毁灭, 史诗火炬, 其他所有史诗暗金支持一次额外附魔.

- 附魔公式, 史诗暗金 + 普通暗金 + 1 灵魂宝石 + 30#
- 附魔属性
  - +2 随机职业技能
  - +2 随机单体技能(有可能为空)

## 其他说明

如果附魔的物品是武器, 有两种标记公式选择, 可选择附魔物理属性组或者元素属性组

暗金/亮金/蓝色武器 + 2/3/4 世界之石碎片 + 1 超级法力药剂 = 开启元素附魔属性组标记
暗金/亮金/蓝色武器 + 2/3/4 世界之石碎片 + 1 超级治疗药剂 = 开启物理附魔属性组标记

## 附魔分组介绍

#### 武器附魔属性组 1, 主要针对法系

- aura 1-10 Conviction 信念灵气
- aura 1-10 Meditation 冥思灵气
- 2 random skill +2 随机职业技能
- cast2 快速施法速度%
- mana-kill 杀敌回蓝
- extra-fire 增加火系技能伤害%
- extra-ltng 增加电系技能伤害%
- extra-cold 增加冰系技能伤害
- pierce-fire 减少敌人火系抗性%
- pierce-ltng 减少敌人电系抗性%
- pierce-cold 减少敌人冰系抗性%

#### 武器附魔属性组 2, 主要针对物理系

- aura 1-20 Fanaticism 1-20 狂热灵气赋予
- aura 1-20 Concentration 1-20 专注灵气赋予
- 2 random skill +2 随机职业技能
- dmg% 增强伤害%
- pierce-physics 减少敌人物理系抗性
- swing2 快速攻击速度
- att 增加命中率
- heal-kill 杀敌回血
- crush 压碎攻击的几率 CB
- deadly 致命攻击的几率 DS
- reduce-ac 无视目标防御

#### 盾牌附魔属性

- aura 1-20 Conviction 1-20 信念灵气赋予
- aura 1-20 Blessed Aim 10-20 祝福瞄准光环赋予
- cast2 快速施法速度%
- red-dmg% 物理伤害减少%
- res-all 所有抗性
- res-all-max 最大抗性上限
- hp% 生命上限百分比
- ac% 增加防御%

#### 护甲附魔属性

- random single tab skill +2 随机单系技能
- aura 1-20 Defiance 10-20 反抗光环赋予
- aura 1-20 Prayer 10-20 祈祷灵气赋予
- hp% 生命上限百分比
- red-dmg% 物理伤害减少%
- res-all 所有抗性
- res-all-max 最大抗性上限
- ac% 增加防御%
- balance1 快速打击恢复%

#### 头盔附魔属性

- aura 1-20 Meditation 1-20 冥思光环
- aura 1-20 Vigor 1-20 活力光环
- 3 random single tab skill +3 随机单系技能
- red-dmg% 物理伤害减少%
- res-all 所有抗性
- mana-kill 杀敌回蓝
- heal-kill 杀敌回血
- ac% 增加防御%
- balance1 快速打击恢复%

#### 鞋子附魔属性

- mag% MF 值增加寻找到魔法物品的概率
- res-all 所有抗性
- res-all-max 最大抗性上限
- mana-kill 杀敌回蓝
- heal-kill 杀敌回血
- crush 压碎攻击的几率 CB
- openwounds 撕裂伤口%
- move2 快速跑步%
- ac% 增加防御%

#### 手套附魔属性

- 2 random single tab skill +2 随机单系技能
- swing2 攻击速度%
- cast2 快速施法速度%
- mag% MF 值增加寻找到魔法物品的概率
- ac% 增加防御%
- att 增加命中率
- lifesteal 偷取生命%
- manasteal 偷取法力%
