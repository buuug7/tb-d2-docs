# d2gs and PVPGN

- [pvpgn](https://pvpgn.pro/d2gs_installation.html)

## install.bat

在 d2gs 目录中新建 install.bat 然后将下面的这些内容粘贴进去, 点击右键, 以管理员的身份运行

```
start d2gs.reg
d2gssvc.exe -i
```

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
