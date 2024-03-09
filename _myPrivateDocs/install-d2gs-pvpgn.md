# d2gs and PVPGN

- [pvpgn](https://pvpgn.pro/d2gs_installation.html)

## install d2gs

编辑 d2gs.reg，在 d2gs 目录中运行 d2gs_install.bat, 记着以管理员身份运行。

## install and uninstall PVPGN

install

```
PvPGNConsole.exe -s install
D2CSConsole.exe -s install
D2DBSConsole.exe -s install
```

uninstall

```
PvPGNConsole.exe -s uninstall
D2CSConsole.exe -s uninstall
D2DBSConsole.exe -s uninstall
```

## startup service

```
net start d2gs
net start pvpgn
net start d2cs
net start d2dbs
```

## stop service

```
net stop d2gs
net stop pvpgn
net stop d2cs
net stop d2dbs
```

## delete service

```
sc delete d2gs
sc delete pvpgn
sc delete d2cs
sc delete d2dbs
```
