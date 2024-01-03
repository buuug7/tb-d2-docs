# D2hack.script

## 参考资料

- https://tieba.baidu.com/p/7535244240?see_lz=1
- https://tieba.baidu.com/p/6842844899
- https://forums.pvpgn.pro/viewtopic.php?id=2059

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
