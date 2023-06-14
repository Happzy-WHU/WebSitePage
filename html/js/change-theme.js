const btns = document.querySelectorAll('.theme-switch');
const html = document.documentElement;

const addEvent = btn => {
    btn.addEventListener('click', e => {
        let theme = html.getAttribute("litewebchat-theme");

        if (theme === 'dark') {
            html.setAttribute("litewebchat-theme", 'light');
        } else {
            html.setAttribute("litewebchat-theme", 'dark');
        }

        if (botSendimg === "images/sandclock_white.gif") {
            botSendimg = "images/sandclock_black.gif";
        } else {
            botSendimg = "images/sandclock_white.gif";
        }
    });
};
btns.forEach(btn => {
    addEvent(btn);
});