document.querySelector('.send').onclick = function () {

    if (isLock == false) {
        // 获取第一个class为"select-box"的容器
        const selectBox = document.querySelector('.select-box');
        // 如果找到了，则获取其中的select元素并删除容器
        if (selectBox) {
            const selectElement = selectBox.querySelector('select');
            selectBox.parentNode.removeChild(selectBox);
            // 获取当前选中的选项
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            // 获取选项的文本
            botName = selectedOption.text
        }

        // 获取第一个class为"theme"的容器
        const themediv = document.querySelector('.theme');
        if (themediv) {
            themediv.parentNode.removeChild(themediv);
        }

        htmls.push({
            messageType: 'raw',
            headIcon: 'images/zhongli.png',
            name: 'User',
            position: 'right',
            html: document.querySelector('.chatinput').innerHTML
        });


        if (botName == "gpt-4"){
            convo_id = "F"+convo_id;
            botimg = "images/logo_black.png"
        }else{
            convo_id = "T"+convo_id;
            botimg = "images/logo_green.png"
        }

        htmls.push({
            messageType: 'raw',
            headIcon: botimg,
            name: botName,
            position: 'left',
            html: `<img src="` + botSendimg + `">`,
        });
        webSocketSend();
        isLock = true;
        document.querySelector('.chatinput').innerHTML = '';
        beforeRenderingHTML(htmls, '.lite-chatbox');
    }

};
