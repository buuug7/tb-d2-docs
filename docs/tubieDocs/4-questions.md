---
title: 常见问题
sidebar_position: 5
---

# 常见问题

## 点击快捷方式无反应的错误（大多数 WIN10）

快捷方式的兼容模式, 选择快捷方式, 右键-属性-兼容模式-选择 WINXPSP3

## UNHANDLED EXCEPTION: ACCESS_VIOLATION(c000005)

- 手动关闭 window 数据保护或者运行`去除数据执行保护.bat`(右键以管理员身份运行)
- 查看杀毒软件是否拦截隔离部分文件,把客户端目录加入白名单

## WE GOT A BIG ERROR

运行客户端目录的 `删除暗黑2注册表 (右键管理员身份运行).bat` 删除注册表或者通过手动方式删除注册表中对应键值

删除了注册表中：

- HKEY_CURRENT_USER\SOFTWARE\Blizzard Entertainment
- HKEY_CURRENT_USER\SOFTWARE\Battle.net

删除后一定不要直接进入游戏, 步骤是先重启电脑后再进入游戏, 这很关键

## 如果在 win10 或者 win11 中启动游戏无任何反应

请在群文件中下载 **微软常用运行库合集 2020.12.10.exe** 安装运行库

## 存档损坏

NEC 玩家存档损坏， 一般原因是用物品带聚气铁魔技能或者物品属性中有`+1 致 钢铁石魔`，但是自己技能树中对铁魔技能没有分配点数导致的
