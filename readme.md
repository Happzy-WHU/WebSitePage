# 操作文档

## 修改的地方

### server

这一部分代码需要放在可以访问外网的服务器上。执行launch.py运行后端程序。

v3.py

```
原代码
apiKey = "your_key"
修改为你自己的apikey
```



### html

这一部分代码可以在本地运行，然后通过nginx部署到服务器上。

web-socket-send.js

```
原代码
var socket = new WebSocket('ws://your_server:8000/prompt');
修改为你server代码运行的服务器
```

