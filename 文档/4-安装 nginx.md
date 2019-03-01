# 4-安装 nginx

1. 官网复制 yum 源
```js
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
gpgcheck=0
enabled=1
```
2. 创建 ==/etc/yum.repos.d/nginx.repo== 文件
3. 将 1中复制的内容粘贴到 2中的文件中，并修改==OS==为==centos==,==OSRELEASE==为==7==
4. ```yum install nginx``` 安装
5. ```nginx -v``` 验证是否安装成功
6. ```nginx``` 启动 nginx


## nginx默认的页面存放地址：
  /usr/share/nginx/html/

## nginx的配置文件地址：
  /etc/nginx/nginx.conf
