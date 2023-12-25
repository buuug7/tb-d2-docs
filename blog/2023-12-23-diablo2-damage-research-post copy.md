---
slug: blog-diablo2-damage-research
title: 暗黑伤害改变的机理
authors: buuug8
tags: [damage, resist]
---

## 伤害类型

D2 中一共有 6 种不同的伤害类型：火、冰、电、毒、魔法和物理（实体）。虽然人物状况栏里只有 4 种抗性的数值，但每一种伤害类型都有相对应的抗性。

#### 伤害类型的例子

火系伤害 大火球（女巫）和火焰箭（亚马逊）
冰系伤害 冰封球（女巫）和冰冻箭（亚马逊）
电系伤害 新星（女巫）和闪电之怒（亚马逊）
毒系伤害 毒之新星（死灵法师）
魔法伤害 骨矛、骨灵（死灵法师）和狂战士（野蛮人）
物理伤害 普通攻击伤害和大部分的其他非元素伤害

#### 毒系伤害与中毒持续时间

与其他的伤害类型不同，毒系的最终伤害由两个变量决定：每帧的毒系伤害和中毒持续时间。总伤害的计算公式是：每帧毒系伤害 x 中毒持续时间（单位：帧，每 25 帧为 1 秒）因此，有两个相当于抗性的属性可作用于毒系伤害：毒系抗性（Poison Resistance）和减少中毒持续时间（Poison Length Reduction），前者影响每帧的毒系伤害量，而后者影响中毒时间。

## 可以改变伤害的参数

游戏中一共有 8 种可以改变伤害的参数

- 抗性（Resistances）
- 百分比吸收（Percentage absorb）
- 直接吸收（Direct absorb）
- 伤害减少 X 或魔法伤害减少 X（Damage reduced by X and Magic damage reduced by X）
- 女巫的能量护盾（Energy Shield）
- 死灵法师的骨甲和德鲁伊的旋风甲（Bone Armor and Cyclone Armor）
- 因角色而造成的伤害改变（如 PvP 伤害的改变）
- 减少中毒持续时间（Poison Length Reduction）

## 抗性的计算

| 技能               | 影响的抗性 | 普通目标 | 免疫目标 |
| ------------------ | ---------- | -------- | -------- |
| 伤害加深 （AD）    | 物理       | -100     | -20      |
| 审判（Conviction） | 冰、火、电 | -X       | -X/5     |
| 衰老（Decrepify ） | 物理       | -50      | -10      |
| 降低抵抗（LR）     | 冰火电毒   | -X       | -X/5     |

## 计算顺序

#### 伤害改变参数的影响：

伤害改变参数对最终伤害的影响有极为严格的顺序:

1 因角色而造成的伤害改变（XvX）
2 女巫的能量护盾（Energy Shield）
3 死灵法师的骨甲和德鲁伊的旋风甲（Bone Armor and Cyclone Armor）
4 伤害减少 X 或魔法伤害减少 X（DR and MDR）
5 抗性（Resistances）
6 百分比吸收（% Absorb）
7 直接吸收（Direct Absorb）

计算中的每一步都不能把伤害降到 0 以下的，得到的结果我称之为 Damage Dealt（DD）。最后的三步计算如下所示：

1 将法力值减去（32 - 心灵传动 Telekinesis 基础等级） / 16 x 由 ES 所吸收的伤害
2 加入吸收所得到生命值
3 生命值再减掉 DD 的伤害

#### 其他的影响

“伤害转换为魔法消耗”属性的影响在所有伤害改变参数计算完后计算
因为荆棘灵气（Thorns）、攻击反噬（Iron Maiden）和荆棘之灵（Spirit of the Barbs）所造成伤害的计算是基于对方所有伤害改变参数作用之后所得到的伤害值。

#### 防御（Defense）与格挡（Blocking ）与伤害改变之间的关系

防御与格挡是在 to-hit（打击）一步中进行计算的，这一步骤发生于伤害计算之前。游戏中准确的计算顺序是这样的：

1. 检查防御力
2. 检查格挡几率（防御者跑动时减为原来的 1/3，跑动的刺客武器格挡（Weapon Block）忽略不计）
3. 决定攻击者是否造成伤害，是则击中目标
4. 进行伤害的计算

## 伤害计算公式

#### Damage Dealt，获得生命（Life Gained）和失去法力（Mana Lost）的计算公式

假设每一步计算中伤害值都没有减到 0，则我们可以得到得到下面三个关于 Damage Dealt，获得生命和失去法力的计算公式：

Damage Dealt = (Damage _ XvX / 100 _ (1 - ES / 100) - ArmorSkill - DR) _ (1 - Resistance / 100) _ (1 - Absorb% / 100) -

Absorb

Life Gained = (Damage _ XvX / 100 _ (1 - ES / 100) - ArmorSkill - DR) _ (1 - Resistance / 100) _ Absorb% + Absorb

Mana Lost = (32 - TelekinesisBaseLevel) / 16 _ Damage _ XvX / 100 \* ES / 100

此公式中的 Resistance, Absorb%, XvX, 和 ES 都取的是整数，比如说 50。

#### 最终伤害

如果我们再假设获得的生命值全部加到了角色的生命条中（没有超过最大生命值），那么最终伤害如下所示（实际上就是将 Damage Dealt 伤害与吸收所得生命相减）：

最终伤害 = Damage Dealt - Life Gained

将其他数据代入，我们得到：

最终伤害 = (Damage _ XvX / 100 _ (1 - ES / 100) - ArmorSkill - DR) _ (1 - Resistance / 100) _ (1 - 2 _ Absorb% / 100) - 2 _

Absorb

如果最终伤害为负数，你将得到生命值。
