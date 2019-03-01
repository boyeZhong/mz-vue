# 3-安装 mongodb

[官网链接](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

1. 创建 ==/etc/yum.repos.d/mongodb-org-4.0.repo== 文件，并写入下面的内容

```js
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

2. 使用 ```yum install mongodb-org``` 安装
3. 启动 mongodb
```shell
# 启动
service mongod start

# 停止
service mongod stop

# 查看状态
service mongod status
```

----

至此 ，服务器上的 mongodb 就安装好了，后续还希望能直接通过本地电脑来远程控制服务器上的mongodb

#### 本地电脑使用 Robo 3T 来连接

1. 创建连接
<img src="./img/pic-1.png" />
2. 连接
<img src="./img/pic-2.png" />
报错，不允许连接，需要修改下服务器的 mongodb 配置
3. 服务器 mongodb 配置
```shell
vim /etc/mongod.conf
```
```shell
net:
#    bindIp: 127.0.0.1
    bindIpAll: true
```
    1. 注释掉 net 下面的 bindIp
    2. 在其下面 添加 bindIpAll: true
4. 重启 mongodb 服务
```shell
service mongod restart
```
5. 再次本地连接验证OK


## 将 本地（windows）上的数据库 -> 服务器（linux）上的数据库

1. 将本地数据库做备份

2. 上传备份的文件到服务器
3. 在服务器上使用备份
