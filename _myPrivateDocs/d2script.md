# D2hack.script

## 参考资料

- https://tieba.baidu.com/p/7535244240?see_lz=1
- https://tieba.baidu.com/p/6842844899
- https://forums.pvpgn.pro/viewtopic.php?id=2059

## 最新的

```
# Blocking overhead messages

D2Game.dll 0XD00A08B 31C0C2080090909090901

# Red Gate Second Forward, Reduce TCP/IP Reader Loading Time

D2Client.dll 0X14D6E FA 001

# Little monster only drops gold.

D2Game.dll 0XFD9D 7F0F 909090 1

# A full-blown script

D2Game.dll 0XDE705 7602 7402 1

# Close Exp for Punishment

D2Game.dll 0XDAA7A 740A EB0A 1

# Equipped with air-accumulating skills for unlimited use

D2Game.dll 0X9F593 7C02 90901


# Box gold coin cap supports 30 million

D2common.dll 0X2E9C1 A0252600 80C3C901

# Individual gold coin cap supports 30 million

D2common.dll 0X3198E 10270000 E0930400 1

#manaburn BUG Fix
D2Game.dll 0X222DD C1E608 909090 1
D2Game.dll 0X222F2 C1E708 909090 1

```

```
#本修改全部是113c


#有个结论
#CMP这种语句需要改数值的就单独改数值就行了,不要连前面的CMP代码也写进来


#下面的是改暗金装备也可以做符文之语 默认04表示白装 05蓝 06绿 07亮 08暗 09橙 0A是全部
#6FD76BBF |. 83F8 04 CMP EAX,4
D2Common.dll 0X26BC1 04 0A 1


#这个好像是改战网建立游戏的间隔时间 默认25秒 改为1秒https://tieba.baidu.com/p/5013697072?red_tag=2526005838
#D2Client.dll 0X5E7CE FA 00 1 //这个是1.11b的
#6FAC4D6D |. 68 FA000000 |PUSH 0FA #这个是1.13c的 FA是25可能是表示250帧,即10秒 感觉10秒的话 不改也没关系,改了反而容易出问题
#D2Client.dll 0X14D6D 68FA000000 6800000000 1


#下面这个是把存储箱的金币上限改为3000W 十六进制是01C9C380,在DLL里面存储如下 前面默认的是002625A0即250W 05F5E100是1亿 0BEBC200是1亿 77359400是20亿
D2common.dll 0X2E9C1 A0252600 80C3C901 1
#下面这个是把人物身上携带的金币上限改为30W 000493E0 估计应该是一个倍数 前面默认的数据是00002710是1W,即新人出生可携带的金币数量,然后根据角色的等级递增 改这个相当于是把人物携带的金币上限增加了30倍
D2common.dll 0X3198E 10270000 E0930400 1


#修复魔影斗篷bug
#6FCBD247 |. 74 1F JE SHORT D2Game.6FCBD268
D2Game.dll 0X9D247 741F EB1F 1


#修复血量32767显示异常问题 这个有问题
#D2Game.dll 0X8B81B 6A0F 6A10 1
#D2Game.dll 0X8B82C 6A0F 6A10 1
#D2Game.dll 0X8B83E 6A0F 6A10 1
#6FB5C1CE 6A 0F PUSH 0F #3个地方都是6A0F 不知道为什么改了还是不显示 ,算了,反正我以后也不会开BT版 暂时不管
D2Client.dll 0XAC1CE 6A0F 6A10 1
D2Client.dll 0XAC1DA 6A0F 6A10 1
D2Client.dll 0XAC1EA 6A0F 6A10 1


#佣兵全装备,改了这里还要改txt
#6FB0BDAF |. 85C0 TEST EAX,EAX
#6FB0BDB1 |. 75 0C JNZ SHORT D2Client.6FB0BDBF
#D2Client.dll 0X5BDB0 C075 C0EB 1
D2Client.dll 0X5BDB1 750C EB0C 1
#6FB0BE39 |. 85C0 TEST EAX,EAX
#6FB0BE3B |. 75 2F JNZ SHORT D2Client.6FB0BE6C
#D2Client.dll 0X5BE3A C075 C0EB 1
D2Client.dll 0X5BE3B 752F EB2F 1
#6FB3C7BB |. 85C0 TEST EAX,EAX
#6FB3C7BD |. 75 0C JNZ SHORT D2Client.6FB3C7CB
#D2Client.dll 0X8C7BC C075 C0EB 1
D2Client.dll 0X8C7BD 750C EB0C 1
#6FB3C7FB |. E8 CCF9F7FF CALL <JMP.&D2Common.#10744>
#6FB3C800 |. 85C0 TEST EAX,EAX
#6FB3C802 |. 0F85 98000000 JNZ D2Client.6FB3C8A0 ##主要是这一句
#6FB3C808 |. 6A 22 PUSH 22
#6FB3C80A |. E9 87000000 JMP D2Client.6FB3C896
#6FB3C80F |> 6A 1B PUSH 1B ; Case 10F of switch 6FB3C7E3
#6FB3C811 |. E9 80000000 JMP D2Client.6FB3C896
#D2Client.dll 0X8C7FF FF85C00F85980000006A22E987 FF85C0E999000000906A22E987 1 #也不知道这个是我当时怎么写的
D2Client.dll 0X8C802 0F8598000000 E99900000090 1


#6FCF0649 75 0C JNZ SHORT D2Game.6FCF0657
#6FCF06A1 |. 75 61 JNZ SHORT D2Game.6FCF0704
#D2Game.dll 0XD0648 C075 C0EB 1 #这是网上找的,貌似改的地方有问题,虽然最后也有效果,但是这样不严谨啊
#D2Game.dll 0XD06A0 C075 C0EB 1
D2Game.dll 0XD0649 750C EB0C 1
D2Game.dll 0XD06A1 7561 EB61 1


#强制亮金武器防具戒指项链必定6词缀
#6FC352E8 |. BA C590C66A MOV EDX,6AC690C5
#6FC352ED |. F7E2 MUL EDX
D2Game.dll 0X152E8 BAC590C66AF7E2 BA06000000EB13 1
#强制亮金珠宝必定4词缀
#6FC352D6 |. 83E0 01 AND EAX,1
#6FC352D9 |. 83C0 03 ADD EAX,3
D2Game.dll 0X152D6 83E00183C003 B80400000090 1


#强制所有蓝色装备必定2词缀
#6FC303E8 7E 05 JLE SHORT D2Game.6FC303EF
#6FC30435 |. 75 0A JNZ SHORT D2Game.6FC30441
D2Game.dll 0X103E8 7E05 9090 1
D2Game.dll 0X10435 750A 9090 1


#强制职业装备必出3条,必定3级
#6FC33368 |. 83FA 5A CMP EDX,5A #好像改这一条指令就行了啊
#6FC3336B |. 7E 0A JLE SHORT D2Game.6FC33377
#6FC3336D |. C74424 10 03000000 MOV DWORD PTR SS:[ESP+10],3
#D2Game.dll 0X13368 83FA5A 83FA00 1
D2Game.dll 0X1336A 5A 00 1
#6FC3355B |. D1F8 |SAR EAX,1
#6FC3355D |. 03C8 |ADD ECX,EAX
#6FC3355F |. 83F9 5A |CMP ECX,5A #好像也是只需要改这里就行了
#6FC33562 |. 7C 07 |JL SHORT D2Game.6FC3356B
#6FC33564 |. BD 03000000 |MOV EBP,3
#D2Game.dll 0X1355F 83F95A 83F900 1
D2Game.dll 0X13561 5A 00 1


#修改最高127PP 要同时修改2个文件
#6FB20A88 |. 83F8 08 CMP EAX,8 //83F808这个08就是最高PP数 7F就是127了 不要改更高,貌似超过127的无效
#6FB20A8B |. 8BF8 MOV EDI,EAX
#D2Client.dll 0X70A88 83F808 83F87F 1
#这样改不行,单纯改数值的时候不能加上整个语句, 这样改的话最高126PP
D2Client.dll 0X70A90 08 7F 1
#6FC57434 |. 83F9 08 CMP ECX,8
#6FC57437 |. 7F 06 JG SHORT D2Game.6FC5743F
#D2Game.dll 0X37434 83F908 83F97F 1
#这样改不行,单纯改数值的时候不能加上整个语句, 这样改的话最高126PP
D2Game.dll 0X37436 08 09 1

#修改最低几PP,这个很邪恶的,最低PP数是强制最低是这个,即使你手动调整/players1也是强制这个
#6FB20A68 |. 83F8 01 CMP EAX,1 //83F801这个01就是最低PP数,想搞怪的话可以改任意pp数,这样进游戏就不用每次都输入/players8了
#6FB20A6B |. 74 0A JE SHORT D2Client.6FB20A77
#D2Client.dll 0X70A68 83F801 83F803 1
#这样改不知道是否可以
D2Client.dll 0X70A6A 01 7F 1


#修改抗性上限命中上下限等这里就不用了 给个地址自己看吧https://tieba.baidu.com/p/1501729318?pn=1 我觉得这些是没有必要改的


#修复近战怪物法力燃烧一刀空法的问题https://tieba.baidu.com/p/6427278638 (其实我觉得这不叫bug了,应该是故意的,不然顶球SOR就无敌了)
#6FC422DD . C1E6 08 SHL ESI,8
#6FC422F2 . C1E7 08 SHL EDI,8
D2Game.dll 0X222DD C1E608 909090 1
D2Game.dll 0X222F2 C1E708 909090 1


#提高单机fps https://tieba.baidu.com/p/5771012224?red_tag=0113948998
#6FAF4E51 > 391D 9034BD6F CMP DWORD PTR DS:[6FBD3490],EBX
#6FAF4E57 . 75 35 JNZ SHORT D2Client.6FAF4E8E #试试不要7535看看 经过测试不要也可以开高帧率 就不改了
D2Client.dll 0X44E51 391D9034BD6F7535 9090909090909090 1


#修复魔法伤害加成 然后在Properties.txt里面仿照extra-fire 添加一行命名为extra-magi就行了 stat1填passive_mag_mastery 面板不显示,但是实际应该是有效果的 估计无效了,算了,不改魔法了,既然暗黑不支持就不弄了
D2Game.dll 0X102B6C FFFFFFFF 66010000 1


#小站全开https://tieba.baidu.com/p/7228142366?pid=137939305751&cid=137941925207&red_tag=1179698989#137941925207 这个是1.11b的,就不弄了
#D2Common.dll 0x83E6B 668B3442 66BEFFFF 1




#1.13c
#无限注入任务
D2Client.dll 0X45CFF 7418 9090 1
#6FCE0351 6A 01 PUSH 1 #这个由于已经测试有效果了其他的我就不找了
D2Game.dll 0XC0351 6A01 6A03 1
#无限打孔任务
D2Game.dll 0X585DA 01 03 1




#1.13c 死亡不掉装备的修改
#https://tieba.baidu.com/p/7315987976
#6FC99210 83EC 18 SUB ESP,18 ; D2Game.6FC99210(guessed Arg1,Arg2,Arg3,Arg4,Arg5)
#6FC99213 53 PUSH EBX
#6FC99214 55 PUSH EBP
#Change To:
#6FC99210 31C0 XOR EAX,EAX ; D2Game.6FC99210(guessed Arg1,Arg2,Arg3,Arg4,Arg5)
#6FC99212 C2 1400 RETN 14


#修改方式:用od打开d2目录下的D2Game.dll
#然后定位到6FC99210 代码是83EC 18
#然后下面两行就是
#6FC99213 53 PUSH EBX
#6FC99214 55 PUSH EBP
#然后选中修改的这2行 右键-copy to executable-selection 就会弹出一个窗口,单独的展示game.dll的窗口 然后右键-savefile 就行了


#用HXD修改的方法是
#打开HxD软件,修改DLL,查找CCCC83EC1853558B6C2428568B742428 找od里面显示的上下文多填点 找到唯一地址0x79210
#修改为 3100C21400 就行了
#如果用本脚本,则修改为如下就行了
D2Game.dll 0X79210 83EC 31C0 1
D2Game.dll 0X79212 185355 C21400 1




#1.13修改不跑尸体的方法 实测这个修改可以
#https://tieba.baidu.com/p/7291950996
#[1.13c] - D2Game.0x793FC


#000793CF 8BC3 MOV EAX,EBX
#000793D1 E8 4A06FDFF CALL 00049A20
#000793D6 50 PUSH EAX
#000793D7 55 PUSH EBP
#000793D8 E8 2F10F9FF CALL 0000A40C
#000793DD 8DB7 D0000000 LEA ESI,DWORD PTR DS:[EDI+D0]
#000793E3 8BFD MOV EDI,EBP
#000793E5 E8 266D0600 CALL 000E0110
#000793EA 6A 11 PUSH 11
#000793EC 55 PUSH EBP
#000793ED E8 B010F9FF CALL 0000A4A2
#000793F2 6A 01 PUSH 1
#000793F4 6A 07 PUSH 7
#000793F6 55 PUSH EBP
#000793F7 E8 CE0FF9FF CALL 0000A3CA
#000793FC 8B95 C8000000 MOV EDX,DWORD PTR SS:[EBP+C8]
#Change
#000793FC 8B95 C8000000 MOV EDX,DWORD PTR SS:[EBP+C8]
#to
#000793FC E9 F6020000 JMP 000796F7
#D2Game.dll 0X793FC 8B95C8000000 E9F602000090 1 #按理说我这样改应该是对的,但是不知道为什么就是不行 直接改DLL是没问题的



#[1.13c]修改无限箭袋.
#https://tieba.baidu.com/p/7284457545
D2game.dll 0XA16BE 4D 48 1


#修改同地图带小号就能获得经验
#https://tieba.baidu.com/p/7090543308
D2game.dll 0XDAFCF 7753 9090 1




#https://forums.pvpgn.pro/viewtopic.php?id=2059 mxcen分享的几个script
# Blocking overhead messages
#D2Game.dll 0XD00A08B 31C0C2080090909090901


# Red Gate Second Forward, Reduce TCP/IP Reader Loading Time
#D2Client.dll 0X14D6E FA 001


# Little monster only drops gold.
#D2Game.dll 0XFD9D 7F0F 909090 1


# A full-blown script
#D2Game.dll 0XDE705 7602 7402 1


# Close Exp for Punishment
#D2Game.dll 0XDAA7A 740A EB0A 1


# Equipped with air-accumulating skills for unlimited use
#D2Game.dll 0X9F593 7C02 90901


# Box gold coin cap supports 30 million
#D2common.dll 0X2E9C1 A0252600 80C3C901
# Individual gold coin cap supports 30 million
#D2common.dll 0X3198E 10270000 E0930400 1


#manaburn BUG Fix 这个是法力燃烧bug的修复
#D2Game.dll 0X222DD C1E608 909090 1
#D2Game.dll 0X222F2 C1E708 909090 1






#修改掉落就直接辨识
#http://www.myth113.com/thread-1111-1-1.html
#D2Game.dll - F6BD '[unique]'
#016DF6BD 6A 00 PUSH 0
#D2Game.dll - 104C0 '[magic]'
#016E04C0 6A 00 PUSH 0
#D2Game.dll - 13DA9 '[set]'
#016E3DA9 6A 00 PUSH 0
#D2Game.dll - 15442 '[rare]'
#016E5442 6A 00 PUSH 0
#这些 push 0的地方 改成push 1就是自动已辨识 每个push对应物品质量 有标注


1.13c ddraw和glide进入游戏和小退过程跳字母解决
D2Glide.dll 0x7B2D 2 0xDB33 0x48EB 0 1 #跳字母
D2DDraw.dll 0x9552 2 0xED33 0x53EB 0 1 #跳字母


取消打孔物品格子的检测，（比如头盔占4格，最多只能4孔，改了后最大可以打6孔）
D2Common.dll
0x2a424 - 7F06 改成 EB06
0x46893 - 7F0F 改成 EB0F
0x2467f - 7c02 改成 9090


#https://tieba.baidu.com/p/6317957924
#角色死亡不掉金币 这样写不行 看来只能直接修改DLL 已经测试过 直接修改DLL可以成功 新建的小号 出门死亡 不掉金币 配合上面的不用捡尸体使用正好 暂时未确定DY难度死亡是否会掉经验
#D2Game.dll 0X583A0 56578BF8578BF153E8D3FDFFFF 56578BF8909090909090909090 1
#D2Game.dll 0X583A4 57 90 1
#D2Game.dll 0X583A5 8BF1 9090 1
#D2Game.dll 0X583A7 53 90 1
#D2Game.dll 0X583A8 E8D3FDFFFF 9090909090 1


增加无形物品几率如何 用script写？我只直接看了风大的帖子改DLL的。

“
改成64就是100%：
D2Game.dll0XEC1E 05
”


D2Game.dll 0XEC1E 05 64 1
实测可以用 改为64就是100%几率出无形


#小站全开 单机MOD群 ss发的(风暴战记MOD作者1024854127)

D2Common.dll 0X67C76 668B805A9CDE6F660904518D B8FFFFFFFF9090090451908D 1


#心灵传动捡装备 在奈非天魔典MOD群共享发现的563226660 已经测试 可用

D2Game.dll 0X43444 83 E2 1


#单机变量取最大值补丁13=43变量7技能
D2Common.dll 0x48B19 0C 13 1#变量所有技能+7技能
D2Common.dll 0x48B1C 08 13 1#变量所有技能+7技能
D2Common.dll 0x48A7F 08 07 1#防御511%ED
```

## d2gs-沈沦没

#put this script together with the loader, and the
#loader will read it automatically at startup.
#Any line begin with '#' are ignored
#all digits here should be hex
#use tab or space to separate two items
#Format:
#Module Name Offset(RVA) Source Data(for check) Destnation Data(Change to) Method
#Offset Format: RVA[:Offset, Pattern]
#You can use pattern searching to get the RVA result now
#Method:
#0X00: replace source with dest
#0X01: relocate src
#0X02: relocate dest
#0X20: relocate call address
#you may add your own hack below freely
#==================================游戏 BUG 修复补丁================================ #遗忘骑士诅咒 BUG
#D2Game.dll 0xFB454 42 E917F5FFFF909090570000005B00000000000000 1
#D2Game.dll 0xFA970 00 420000004800000052000000E9DB0A0000 1 #红门秒进，降低 TCP/IP 读条 Loading 时间
#D2Client.dll 0X14D6E FA 00 1
#32k 生命/法力/耐力显示错误 Fix
D2Game.dll 0X8B81A 6A0F 6A10 1
D2Game.dll 0X8B82C 6A0F 6A10 1
D2Game.dll 0X8B83E 6A0F 6A10 1
D2Client.dll 0XAC1CE 6A0F 6A10 1
D2Client.dll 0XAC1DA 6A0F 6A10 1
D2Client.dll 0XAC1EA 6A0F 6A10 1 #解决过快加入多个角色卡死或者提示进入游戏失败 BUG
Fog.dll 0X118FD A3 9090909090 1 #提高 FPS
#D2Client.dll 0X44E51 391D9034BD6F7535 9090909090909090 1
#D2Client.dll 0X5AB43 85C00F8595000000 9090909090909090 1 #仓库金币上限支持 3000 万
D2Common.dll 0X2E9C1 A0252600 80C3C901 1 #背包金币上限支持 3000 万
D2Common.dll 0X3194A 10270000 E0930400 1
D2Common.dll 0X3195E 10270000 E0930400 1
D2Common.dll 0X3198E 10270000 E0930400 1 #修正具备法力燃烧的近战怪物导致玩家法力一刀归零的 BUG
D2Game.dll 0X222DD C1E608 909090 1
D2Game.dll 0X222F2 C1E708 909090 1 #大箱子按钮 Fix
#D2Client.dll 0X997A1 8D8C1021FFFFFF 8D8C109BFFFFFF 1
#D2Client.dll 0X8B626 8DB40821FFFFFF 8DB4089EFFFFFF 1
#D2Client.dll 0X8B631 8D840849FFFFFF 8D8408C3FFFFFF 1
#D2Client.dll 0X99678 8D8C1044FFFFFF 8D8C10BEFFFFFF 1
#D2Client.dll 0X8B611 81C1B8000000 81C1B3000000 1 #血魔法诅咒状态修复
D2Common.dll 0X37D54 8B401C 909090 1
D2Game.dll 0XBE7E 8B 909090909090 1 #死亡公式计算-比原始更好一点
D2Game.dll 0XDE255 3D 83F8019090 1 #赌博窗口显示更多装备
#D2Game.dll 0XBE611 83 837C241414 1
#Random Boss Base Class Pick Fix
D2Game.dll 0XDF4BF 8A486D84C9755D 90909090909090 1 #修复 RandTransforms 错误
D2Client.dll 0XA7B1C 1E 26 1
#Anya Fix Bug Set Resistance
D2Game.dll 0X5A03B 53E8A106FBFF 56E83104FBFF 1
D2Game.dll 0X5A046 53E89606FBFF 56E82604FBFF 1
D2Game.dll 0X5A051 53E88B06FBFF 56E81B04FBFF 1
D2Game.dll 0X5A05C 53E88006FBFF 56E81004FBFF 1 #修正具备法力燃烧的近战怪物导致玩家法力一刀归零的 BUG
D2Game.dll 0X222DD C1E608 909090 1
D2Game.dll 0X222F2 C1E708 909090 1
#==================================游戏设置补丁=================================== #传送小站默认全开
D2Common.dll 0X67C69 0FB7C0 31C0486689410289410489410889410CC208006F660904518D0C51C20800 1 #小站自动点亮（另外一个版本）
#D2Common.dll 0X67C76 668B805A9CDE6F B8FFFFFFFF9090090451908D0C51C20800 1 #城中可以使用传送技能（客户端也需要修改）
#D2Common.dll 0X52379 8A4305 834B05019090 1 #任务全部显示已经完成（测试）
#D2Common.dll 0X2D0F0 8B442404 31C040C20C00 1 #符文之语全底材可用-孔数不限-底材装备类型不限
#D2Common.dll 0X26BC2 7C05 EB05 1
#D2Common.dll 0X26C3B 751D 9090 1
#D2Common.dll 0X26CAB 7C5A 9090 1
#D2common.dll 0X26CF8 7536 EB36 1 #小怪只掉落亮金\暗金
#D2Game.dll 0XFD9D 7F0F 9090 1 #打怪直接升级到 99 级
#D2Game.dll 0XDE705 7602 7402 1
#(箭支\投掷武器\书\钥匙)数量无限
D2Game.dll 0XA16BE 4D 48 1
D2Game.dll 0X13033 4D 48 1
D2Game.dll 0XDA280 6AFF 6A00 1
D2Game.dll 0XD9D22 6AFF 6A00 1
D2Game.dll 0XD41D4 6AFF 6A00 1 #装备带有的聚气技能无限用
D2Game.dll 0X9F593 7C02 9090 1 #关闭 Exp 获取惩罚(mlvl/clvl)
#D2Game.dll 0XDAA7A 740A EB0A 1
#A5 古代人任务取消经验上限(可升级几级)
#D2Game.dll 0X5BFFA 7E04 EB04 1
#BOSS 永远是首杀掉落
#D2Game.dll 0X75858 743D 9090 1
#D2Game.dll 0X7586D 7428 9090 1
#D2Game.dll 0X75888 740D 9090 1 #所有怪可掉落 99 级物品
#D2Game.dll 0XE5D0 56 B87F000000C2040090 1 #所有难度按地狱难度掉落物品
#D2Game.dll 0X75719 0F 31FF4747 1 #装备随便穿
#D2Common.dll 0X27076 33C0 B001 1
#D2Common.dll 0X27080 33C0 B001 1 #掉落属性满变量
#D2Common.dll 0X4837D 85C0 01C0 1
#D2Common.dll 0X48391 85DB 01DB 1
#D2Common.dll 0X48122 8B7B08 8B7B0C 1
#D2Common.dll 0X481B2 8B7B08 8B7B0C 1
#D2Common.dll 0X48242 8B7B08 8B7B0C 1
#D2Common.dll 0X482D2 8B7B08 8B7B0C01FF9090 1
#D2Common.dll 0X48A7D 8B7B08 8B7B0C 1
#D2Common.dll 0X48B1A 8B7B08 8B7B0C 1
#D2Common.dll 0X492DC 8B7008 8B700C 1
#D2Common.dll 0X4923D 56 50 1
#D2Common.dll 0X465B1 8BF9 8BF8 1 #所有技能没有 CD 时间
#D2Game.dll 0XA1CAC 8B BAFFFFFFFF90 1
#D2Common.dll 0X5229D 8B BAFFFFFFFF90 1
#D2Client.dll 0XA2EDE 8B BAFFFFFFFF90 1 #开启 127PP 难度(战网无效,命令:/Players (1-127))
#D2Game.dll 0X37434 83F908 83F97F 1
#D2Client.dll 0X70A88 83F808 83F87F 1
#D2Client.dll 0X70A8F BF08 BF7F 1 #获取经验按 8PP
D2Game.dll 0XAF5D0 83 909090EB088B0485F0B5D16FC3B85E01000090909090C3 1 #游戏怪物血量按 8PP
D2Game.dll 0XAF5F0 83 909090EB088B048514B6D16FC3B85E01000090C3 1 #游戏默认 PP 数（掉落、经验、血量）都会按照 8PP 执行
#D2Game.dll 0X379A0 51 B808000000C3909090 1 #死亡装备不掉落
#D2Game.dll 0X793FC 8B95 E9F6020000 1 #死亡装备不掉落(更好的版本)
D2Game.dll 0X79237 7613 EB08 1 #死亡不进行金币惩罚
D2Game.dll 0X383A4 578BF153 909090909090909090 1 #绿色套装一件顶一套
#D2Common.dll 0X23F90 8B4C240485C955 31C0B03FC20C00 1
#1 级就能学所有技能
#D2Common.dll 0X4FB30 51558B6C2410 31C040C20800 1
#D2Common.dll 0X4F510 8B54240885D2 31C0C2080090 1 #传送可以隔墙用
#D2Client.dll 0XA1D2E 8A888F01000084C9 29C988888F010000 1 #所有东西掉落必是无形-不建议开启（包括箭袋、药）
#D2Game.dll 0XEBBD 6A2D EB48 1
#D2Game.dll 0XEC12 B864 B800000000 1 #掉落无形装备几率（16 进制，修改为 14，代表 20%几率为无形）
#D2Game.dll 0X0EC1E 05 14 1 #设置为 20% #马拉给的“抵抗卷轴”+20 抗性修改（16 进制，修改为 14，代表 20）
#D2Game.dll 0X5B0CD BF0A BF14 1 #普通+20 抗性
#D2Game.dll 0X5B0E9 83C70A 83C714 1 #噩梦+20 抗性
#D2Game.dll 0X5B103 83C70A 83C714 1 #地狱+20 抗性 #超级暗金怪物 lv 加层(默认+3,过高导致非 99 场景下掉落 99 品质装备,谨慎使用)
#D2Game.dll 0X21E98 83C003 83C003 1 #超级暗金怪被玩家杀死后玩家经验获取倍数(默认 5 倍)
#D2Game.dll 0X21EB0 8D0480 8D04C0 1 #本条设置为+9 倍（最多 9 倍，超过 9 会溢出） #取消跑步防御降低机制
#D2Game.dll 0XDE5F7 BB01 BB00 1 #技能任务点数赠送设置
#D2Game.dll 0X653D3 01 02 1 #A1 邪恶之穴的任务奖励 2 技能点数
#D2Game.dll 0XD9E9B 01 02 1 #A2 下水道的技能书奖励 2 技能点数
#D2Game.dll 0XBA742 02 04 1 #杀死衣卒尔奖励 4 技能点数
#NPC 出售白色装备\武器带镶嵌孔几率（默认 33%，16 进制，本条为修改为 50%）
#D2Game.dll 0XED5A 83F821 83F832 1 #杀死母牛王可继续进入母牛关卡
D2Game.dll 0X67508 85C0 31C0 1 #非固定暗金怪的爪牙数量-单项最大 64
#D2Game.dll 0X24CA8 6A06 6A08 1 #默认 PUSH 6 - max minions
#D2Game.dll 0X24CAA 6A03 6A03 1 #默认 PUSH 3 - min minions
#D2Game.dll 0X479E3 6A06 6A08 1 #默认 PUSH 6 - max minions
#D2Game.dll 0X479E5 6A03 6A03 1 #默认 PUSH 3 - min minions
#A1 点数重置任务永远不能完成（永远可以重置）
D2Game.dll 0XC0592 8B 909090909090909090 1
#A1 武器注入永远不能完成（永远可以注入）
D2Game.dll 0XC04F6 8B 909090909090909090 1 #跳过任务完成判断代码，任务返回未完成
#A5 打孔任务永远不能完成（永远可以打孔）
D2Game.dll 0XC075D 8B 909090909090909090 1 #跳过任务完成判断代码，任务返回未完成 #物品掉落就已经辨识
#D2Game.dll 0XF6BD 6A00 6A01 1 #暗金
#D2Game.dll 0X104C0 6A00 6A01 1 #绿色套装
#D2Game.dll 0X15442 6A00 6A01 1 #亮金物品
#D2Game.dll 0X13DA9 6A00 6A01 1 #魔法物品 #物品掉落倍率本条代表 2 倍（16 进制）
#D2Game.dll 0XF79B8 00 BB02000000FF742420FF742420FF742420FF742420FF742420FF742420FF742420FF742420E87EB3F1FF4B75D8C22000 1
#D2Game.dll 0X758C0 E8 E8F3200800 1 #物品掉落倍率+属性词缀挂钩
#D2Game.dll 0XF7C98 00 6A0068A9010000FF7208E88327F1FF8BD8FF742420FF742420FF742420FF742420FF742420FF742420FF742420FF742420E892B0F1FF4B7DD8C22000 1
#D2Game.dll 0X758C0 E8 E8D3230800 1
#USC/ULC/UGC 窗口交易
D2Game.dll 0X63680 740A EB0A 1
#==================================未测试验证，不知道是否会带来其它 BUG========================== #经典阻止
#D2Common.dll 0X31E4E 742F EB2F 1
#==================================16K Save=======================================
D2Game.dll 0XF782 20 40 1
D2Game.dll 0XF7F6 20 40 1
D2Game.dll 0XF80B 20 40 1
D2Game.dll 0XF812 20 40 1
D2Game.dll 0XF819 20 40 1
D2Game.dll 0XF821 20 40 1
D2Game.dll 0XF832 20 40 1
D2Game.dll 0XF88E 20 40 1
D2Game.dll 0XF8DB 20 40 1
D2Game.dll 0XF8EA 20 40 1
D2Game.dll 0XF8F2 20 40 1
D2Game.dll 0XF954 20 40 1
D2Game.dll 0XF95B 20 40 1
D2Game.dll 0XF963 20 40 1
D2Game.dll 0XF974 20 40 1
D2Game.dll 0XF9CD 20 40 1
D2Game.dll 0XFA1C 20 40 1
D2Game.dll 0XFA2A 20 40 1
D2Game.dll 0XFA32 20 40 1
D2Game.dll 0XFA94 20 40 1
D2Game.dll 0XFA9B 20 40 1
D2Game.dll 0XFAA3 20 40 1
D2Game.dll 0XFAB4 20 40 1
D2Game.dll 0XFB0D 20 40 1
D2Game.dll 0XFB5C 20 40 1
D2Game.dll 0XFB6A 20 40 1
D2Game.dll 0X537D2 20 40 1
D2Game.dll 0X537DF 20 40 1
D2Game.dll 0X537FD 20 40 1
D2Game.dll 0X53840 20 40 1
D2Game.dll 0X53888 20 40 1
D2Game.dll 0X538AC 20 40 1
D2Game.dll 0X538D2 20 40 1
D2Game.dll 0X538EE 20 40 1
D2Game.dll 0X53900 20 40 1
D2Game.dll 0X5391E 20 40 1
D2Game.dll 0X5396D 20 40 1
D2Game.dll 0X539C2 20 40 1
D2Game.dll 0X53A35 20 40 1
D2Game.dll 0X53A7E 20 40 1
D2Game.dll 0X53ABA 20 40 1
D2Game.dll 0X53AFD 20 40 1
D2Game.dll 0X53B39 20 40 1
D2Game.dll 0X53E52 20 40 1
D2Game.dll 0X53E7B 20 40 1
D2Game.dll 0X53E83 20 40 1
D2Game.dll 0X53E8F 20 40 1
D2Game.dll 0X53E9B 20 40 1
D2Game.dll 0X53F01 20 40 1
D2Game.dll 0X53F12 25 45 1
D2Game.dll 0X53F3D 26 46 1
D2Game.dll 0X53F5C 26 46 1
D2Game.dll 0X53F63 26 46 1
D2Game.dll 0X53F6F 26 46 1
D2Game.dll 0X53F74 20 40 1
D2Game.dll 0X53F80 26 46 1
D2Game.dll 0X53FD8 25 45 1
D2Game.dll 0X53FF5 25 45 1
D2Game.dll 0X54002 20 40 1
D2Game.dll 0X5401D 20 40 1
D2Game.dll 0X54024 20 40 1
D2Game.dll 0X54030 20 40 1
D2Game.dll 0X54052 20 40 1
D2Game.dll 0X54246 20 40 1
D2Game.dll 0X5424D 20 40 1
D2Game.dll 0X54255 20 40 1
D2Game.dll 0X5425E 20 40 1
D2Game.dll 0X5426D 20 40 1
D2Game.dll 0X54277 20 40 1
D2Game.dll 0X542C5 20 40 1
D2Game.dll 0X542D0 20 40 1
D2Game.dll 0X542D8 20 40 1
D2Game.dll 0X542EB 20 40 1
D2Game.dll 0X5430C 20 40 1
D2Game.dll 0X56252 25 45 1
D2Game.dll 0X5625E 26 46 1
D2Game.dll 0X56284 26 46 1
D2Game.dll 0X562BE 20 40 1
D2Game.dll 0X5630B 25 45 1
D2Game.dll 0X5631A 26 46 1
D2Game.dll 0X56321 26 46 1
D2Game.dll 0X56328 26 46 1
D2Game.dll 0X56330 26 46 1
D2Game.dll 0X56338 26 46 1
D2Game.dll 0X56355 26 46 1
D2Game.dll 0X5635C 26 46 1
D2Game.dll 0X56363 26 46 1
D2Game.dll 0X5636D 26 46 1
D2Game.dll 0X56379 26 46 1
D2Game.dll 0X5639D 26 46 1
D2Game.dll 0X563B2 25 45 1
D2Game.dll 0X70FEF 20 40 1
D2Game.dll 0X71001 20 40 1
D2Game.dll 0X7167F 20 40 1
D2Game.dll 0XCB0DF 20 40 1
#==================================Game Config==================================== #死亡装备不掉落
D2Game.dll 0X79237 7613 EB08 1 #获取经验按 8PP
D2Game.dll 0XAF5D0 83 909090EB088B0485F0B5D16FC3B85E01000090909090C3 1 #传送小站默认全开
D2Common.dll 0X67C69 0FB7C0 31C0486689410289410489410889410CC208006F660904518D0C51C20800 1
#A1 点数重置任务永远不能完成（永远可以重置）
D2Game.dll 0XC0592 8B 909090909090909090 1
#A1 武器注入永远不能完成（永远可以注入）
D2Game.dll 0XC04F6 8B 909090909090909090 1
#A5 打孔任务永远不能完成（永远可以打孔）
D2Game.dll 0XC075D 8B 909090909090909090 1 #物品掉落倍率本条代表 2 倍（16 进制）
D2Game.dll 0XF79B8 00 BB02000000FF742420FF742420FF742420FF742420FF742420FF742420FF742420FF742420E87EB3F1FF4B75D8C22000 1
D2Game.dll 0X758C0 E8 E8F3200800 1 #修正一个近战怪物的法力燃烧 BUG
D2Game.dll 0X222DD C1E608 909090 1
D2Game.dll 0X222F2 C1E708 909090 1
