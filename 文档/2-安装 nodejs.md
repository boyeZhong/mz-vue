# 2-安装 NodeJS

## nodejs 的安装
1. nodejs 官网复制 下载地址
2. 在服务器 ==/usr/local== 目录下运行 wget <上一个步骤中复制的下载地址>。（wget需要自行安装）
3. 解压
```shell
xz -d node-v10.15.0-linux-x64.tar.xz

tar -xvf node-v10.15.0-linux-x64.tar

rm -rf node-v10.15.0-linux-x64.tar
```
4. 重命名
```shell
mv node-v10.15.0-linux-x64 node
```
5. 使全局可用。（2选1即可）
    - 配置环境变量(推荐)
    ```shell
    vi /etc/profile
    # 在文件结尾加入以下内容
    export PATH=$PATH:/usr/local/node/bin
    ```
    
    ```shell
    source /etc/profile
    ```
    - 配置软链接
    ```shell
    ln -s /usr/local/node/bin/node /usr/local/bin
    ln -s /usr/local/node/bin/npm /usr/local/bin
    ln -s /usr/local/node/bin/npx /usr/local/bin
    ```
6. 验证OK

## yarn的安装
```shell
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```

```shell
yum install yarn
```

## 使用 pm2 守护进程
> PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

#### 安装
```shell
yarn global add pm2
```
#### 重用命令
- 启动
```shell
pm2 start <app.js>
```
- 停止
```shell
pm2 stop app_name|app_id
```
- 删除
```shell
pm2 delete app_name|app_id
```
- 重启
```shell
pm2 restart app_name|app_id
```
- 查看进程
```shell
pm2 list
```
- 查看日志
```shell
pm2 logs app_name|app_id
```