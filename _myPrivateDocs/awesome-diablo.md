## knowledge base of diablo

- [Create your own custom portals (by Kingpin)](https://d2mods.info/forum/kb/viewarticle?a=291)
- 物品合成参考教程
  - https://d2mods.info/forum/kb/viewarticle?a=49
  - https://d2mods.info/forum/kb/viewarticle?a=177

## PVPGN 清理角色数据

- 清空 pvpgn\var\charinfo
- 清空 pvpgn\var\charsave
- 清空 pvpgn\var\ladders
- 清空 pvpgn\var\users
- 清空 C:\SaveFile\charsave (多仓库分页的关联数据)

## 宝石种类

| 代码 | 宝石种类 |
| ---- | -------- |
| gem0 | 碎宝石   |
| gem1 | 裂宝石   |
| gem2 | 普通宝石 |
| gem3 | 无暇宝石 |
| gem4 | 完美宝石 |

## 其他资源

- http://bbs.anhei2.com/diablo/2020new-runewords.html
- http://bbs.anhei2.com/thread-417388-1-1.html
- [itemCode](http://www.gmstemple.com/Diablo2/itemcodes.html)
- [暗黑 2 神符之语在线查询](http://bbs.anhei2.com/diablo/runewords.html)
- [大粪护身符附魔](http://bbs.anhei2.com/thread-417404-1-1.html)

## 暗黑服务端 d2gs.script 文件妙用

- https://forums.pvpgn.pro/viewtopic.php?id=2059

```
# 全图经验
D2game.dll 0XDAFCF 7753 9090 1

# 雇佣兵复活 1000 块钱
D2Common.dll 0x2CCAC 3D50C300007605B850C30000C20400 3De80300007605B8e8030000C20400 1

# 储物箱金币3000w上限
D2common.dll 0X2E9C1 A0252600 80C3C901

# 个人金币3000w上限
D2common.dll 0X3198E 10270000 E0930400 1

# 双倍爆率
D2Game.dll 0XF79B8 00 BB02000000FF742420FF742420FF742420FF742420FF742420FF742420FF742420FF742420E87EB3F1FF4B75D8C22000 1
D2Game.dll 0X758C0 E8 E8F3200800 1
```

## others

| 药水瓶                              | 代码 |
| ----------------------------------- | ---- |
| Antidote Potion 解毒药水            | yps  |
| Stamina Potion 体力药剂             | vps  |
| Thawing Potion 解冻药水             | wms  |
| Minor Healing Potion 小型治疗药水   | hp1  |
| Minor Mana Potion 初级法力药水      | mp1  |
| Light Healing Potion 轻微治疗药水   | hp2  |
| Light Mana Potion 轻微法力药水      | mp2  |
| Healing Potion 治疗药水             | hp3  |
| Mana Potion 法力药水                | mp3  |
| Greater Healing Potion 强力治疗药水 | hp4  |
| Greater Mana Potion 强力法力药水    | mp4  |
| Super Healing Potion 超级治疗药水   | hp5  |
| Super Mana Potion 超级法力药水      | mp5  |
| Rejuv Potion 回复活力药剂           | rvs  |
| Full Rejuv Potion 全面回复活力药剂  | rvl  |

## how to modify the range of skill 'battle cry' and 'war cry'

Missiles.txt -> missile "warcry" -> column "Range"
same for battlecry

the ranges are in missiles.txt because those skills use missiles to trigger their effects: skills.txt -> column "srvmissilea"

## 在 levels.txt 中生成 boss

If you copy the lines of a boss, you must do two changes to let them spawn (in levels.txt).
"IsSpawn=1"
"Rarity=1"

Now the monster spawns. If not, check names of writing errors.

Creating new superuniques:
add line in SuperUniques.txt. Give them a basic monster id (like brute3).
Go to file monpreset.txt and insert a new line behind the last entry of your favorite act (the lines go from 1 to 5). To Insert a new lvl 1 superunique you have to go to the last act "1" entry and insert here the new line. The name is the name of your superunique like "The Cow King".

Now you have to add them to the obj.txt file from Pauls winds1_edit. Here you insert the new entry in an free act "1" line. The name have to be same as in superuniques.txt.

Edit a file and place the new monster. The edited ds1 file have to be updated in the patch_d2.mpq or in your data folder!!

## att-skill 和 hit-skill 有何区别

aura 光环技能，拥有/装备后自动被使用，不分职业。
oskill 拥有该技能，不分职业。
charged 有限次数的使用该技能，不分职业。
hit-skill 击中敌人时施展此技能，有产生几率的问题，不分职业
att-skill 攻击时施展此技能,但是对射击,投射,施法类攻击不起作用,不分职业
gethit-skill 被击中时施展此技能，有产生几率的问题，不分职业
kill-skill 消灭敌人时施展此技能，有产生几率的问题，不分职业
skill 只有该职业的用户才能获得技能等级提升，区分职业。
skilltab 只有该职业的用户才能获得该页技能等级提升，区分职业。
death-skill 自己挂掉的时候施展此技能，有产生几率的问题，不分职业
levelup-skill 自己升级的时候施展此技能，有产生几率的问题，不分职业

## 修改 skills.txt 注意事项

修改了 skills.txt 打包的时候记着需要 打包 skillscode.bin, 不然有些设置不生效

## classSkill code 含义

- 0 亚马逊
- 1 法师
- 2 死灵
- 3 圣骑士
- 4 野蛮人
- 5 德鲁伊
- 6 刺客

## oskill 等解释

- skill 拥有该技能，区分职业
- oskill 拥有该技能，不分职业

## dm56, ln34 等相关解释

ln = linear increase eg `par1 +par2*(lvl-1)`
dm = diminishing increase eg min par1, max par2 (over simplified, reaches 50% at around lvl8)

Somewhere someone has posted personal calculations that make alternative dm calcs where 50% = lvl 10 or 15 and 75% is 20-25, useful for some skills, less for others.

## ama 三闪问题修复

https://d2mods.info/forum/viewtopic.php?t=59405

This bug can be somehow fixed in txt:
add 3 new lines in states.txt, copy original 3 lines to them and rename them as "dodgenobug" or something, then use those new states in skills.txt and the bug would not appear again.
But the animation would gone as well, your ama would dodge/avoid/evade without animation.

## pachload 红门使用方法

misc 里面的物品指定这个 pspell 然后 param1 参数指定地图 id,右键物品的时候就会创建指定地图的红门了

## MonStats.txt 种怪物无法生成，或者生成后是一堆骷髅

注意查看 MonStats.txt Rarity 列，RARITY：此列也被用来控制怪物的人口数量，用于全局控制该怪物出现的可能性；

例如，假如 Levels.txt 中有这样两个怪物，A 的 Rarity 为 10，B 的为 1，但这里只能出现 1 种怪物，那么选择机制如下：首先游戏会将两者的 Rarity 值相加，然后分别计算这两种怪物的出现几率，A 为 10/11 = 91%，而 B 为 1/11 = 9%，于是 A 出现的几率将远大于 B；如果在此列写入 0，则 Levels.txt 将不会选中此怪物（不过我敢说……假如该怪物是这个区域可能出现的唯一一种怪物的话，游戏显然会出错，因为它进行了一个除数为零的运算……除非暴雪在此加入了额外的检测机制）

## 用 win_ds1edit 在地图中精确位置添加超级怪物

- 在 SuperUniques.txt 中添加你的超级怪物，例如 MySuperMonsterA
- 在 MonPreset.txt 中对应关卡中添加 MySuperMonsterA，记下它的 ID，记着 id 是从 0 开始数的，比如 ID 为 ACT1 的 48
- 记着每个关卡 ID 都是从 0 开始
- 在 win_ds1edit 的 obj.txt 中对应关卡找到对应的 ID 为 48 的 行，填上 MySuperMonsterA 名称即可

需要注意 ID 问题，ID 不对应，会导致怪物无法在地图中出现
