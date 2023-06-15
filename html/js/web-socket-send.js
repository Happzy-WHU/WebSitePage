function webSocketSend() {
    var socket = new WebSocket('ws://your_server:8000/prompt');
    msg = ""
    // 监听服务器发送的消息
    socket.addEventListener('message', (event) => {
        // 如果收到的消息是 "@@@end@@@", 则关闭WebSocket连接
        if (event.data === '@@@end@@@') {
          socket.close();
        } else {
          thisData = event.data.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          msg += thisData
          ModifyHTML('.lite-chatbox', msg);
        }
    });
    // 连接关闭
    socket.addEventListener('close', (event) => {
        isLock = false;
    });
    // 出现错误
    socket.addEventListener('error', (event) => {
        ModifyHTML('.lite-chatbox', "(system)出错了。请重试。");
        console.log('WebSocket错误:', event);
    });

    let sendMgs = document.querySelector('.chatinput').innerHTML.replace(/<div>/g, '\n').replace(/<\/div>/g, '').replace(/<br>/g, "\n");
    // 向服务器发送消息
    const msgData = {
        "prompt": sendMgs,
        "convo_id": convo_id
    };
    socket.onopen = () => socket.send(JSON.stringify(msgData));
}
