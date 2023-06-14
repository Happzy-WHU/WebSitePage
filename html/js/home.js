// 创建角色选择框
function createSelectBox() {
  const selectBox = document.createElement('div');
  selectBox.classList.add('select-box');
  selectBox.innerHTML = `
    <select>
      <option value="gpt-3.5">gpt-3.5</option>
      <option value="gpt-4">gpt-4</option>
    </select>
  `;
  const chatBox = document.querySelector('div.lite-chatbox');
  selectBox.style.height = `${chatBox.offsetHeight / 2}px`;
  chatBox.appendChild(selectBox);
}


// 创建切换配色按钮
function createThemeSwitchButton() {
  const themeDiv = document.createElement('div');
  themeDiv.classList.add('theme');
  themeDiv.innerHTML = `
    <button class="theme-switch">切换配色</button>
  `;
  const chatBox = document.querySelector('div.lite-chatbox');
  chatBox.appendChild(themeDiv);
}


// 初始化页面
const htmls = [
    {
        messageType: 'tipsWarning',
        html: '  欢迎您使用ChatAI  '
    }
];
beforeRenderingHTML(htmls, '.lite-chatbox');
createSelectBox()
createThemeSwitchButton()
