document.addEventListener("keydown", function (event) {
    // 检查是否按下了 Enter 键 (keyCode 为 13) 和 Ctrl 键
    if (event.keyCode === 13 && event.ctrlKey) {
        // 获取按钮并触发 click 事件
        const button = document.getElementById("input_btn");
        button.click();
    }
});