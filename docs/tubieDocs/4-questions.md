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

## 为了兼容性, 客户端默认高分辨率插件是 D2HD.dll

#### 上古高清补丁, 针对有些使用不了高清客户端的用户

> 客户端已经内置补丁, 使用 D2Loader-high.exe 创建快捷方式启动即可

- D2MultiRes.dll
- D2MultiRes.mpq
- D2Loader-high.exe

使用 D2Loader-high.exe 创建快捷方式, 在目标中添加 `-w -direct -pdir map`

#### 新版高分辨率补丁

> 客户端已经内置补丁, 只需要修改配置文件即可

- SGD2FreeRes.dll
- SGD2FreeRes.mpq
- SGD2FreeResolution.json

如果默认的 D2HD.dll 有问题, 可以用这个最新的高分辨率补丁, 编辑 d2gl.ini, 在 load_dlls_late 后面把 D2HD.dll 更换为 SGD2FreeRes.dll 即可

#### 存档损坏

NEC 玩家存档损坏， 一般原因是用物品带聚气铁魔技能或者物品属性中有`+1 致 钢铁石魔`，但是自己技能树中对铁魔技能没有分配点数导致的
