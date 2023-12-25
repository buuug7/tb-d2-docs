---
title: 常见问题
sidebar_position: 5
---

# 常见问题

## 点击快捷方式无反应的错误（大多数 WIN10）

快捷方式的兼容模式, 选择快捷方式, 右键-属性-兼容模式-选择 WINXPSP3

## UNHANDLED EXCEPTION: ACCESS_VIOLATION(c000005)

- 关闭 window 数据保护
- 查看杀毒软件是否拦截隔离部分文件,把客户端目录加入白名单

## WE GOT A BIG ERROR

运行客户端目录的 `删除暗黑2注册表 (右键管理员身份运行).bat` 删除注册表或者通过手动方式删除注册表中对应键值

删除了注册表中：

- HKEY_CURRENT_USER\SOFTWARE\Blizzard Entertainment
- HKEY_CURRENT_USER\SOFTWARE\Battle.net

删除后一定不要直接进入游戏, 步骤是先重启电脑后再进入游戏, 这很关键

## 高清模式下调整分辨率报错

请手动重置 `SGD2FreeResolution.json` 文件中 `Ingame Resolution Mode` 为 0， 再次进入游戏重新设置分辨率。

## 普通模式启动 Could not determine the game version from the file signature

高分辨率插件报错，在 BaseMod.ini 中将 `SGD2FreeRes.dll` 替换为 `D2HD.dll` 即可

## 非高清模式下 调整分辨率报错

请手动重置 `D2HD.ini` 文件中 `Resolution Mode` 为 0， 再次进入游戏重新设置分辨率。
