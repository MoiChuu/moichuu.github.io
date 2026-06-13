// main.js

//後台彩蛋
console.log(
    "%c👨‍💻 洛奇：沒想到你也來看這個？", 
    "color: #d4af37; background: #1a1a2e; font-size: 20px; padding: 10px 20px; border-radius: 5px; font-weight: bold; border: 1px solid #d4af37;"
);
console.log("%c【默黓｜版權所有】來都來了，不如去留言板留下足跡吧！✨", "color: #b3b3cc; font-size: 13px;");

//右鍵浮動警告
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 攔截預設的右鍵選單
    
    // 建立小浮窗
    const toast = document.createElement('div');
    toast.innerText = "我知道你想做什麼";
    
    // 浮窗樣式
    Object.assign(toast.style, {
        position: 'fixed',
        left: `${e.clientX + 10}px`,
        top: `${e.clientY + 10}px`,
        background: 'rgba(12, 12, 14, 0.95)',
        color: 'rgba(255, 0, 0, 0.95)',
        padding: '10px 18px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        border: '1px solid #d4af37',
        boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
        zIndex: '99999',
        pointerEvents: 'none', // 確保不會干擾滑鼠點擊
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        transform: 'translateY(0)'
    });
    
    document.body.appendChild(toast);
    
    // 微動效：讓浮窗微微向上飄移並淡出
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        // 動畫結束後徹底移除元素，不殘留垃圾記憶體
        setTimeout(() => toast.remove(), 600);
    }, 1000);
});


//再亂複製啊
document.addEventListener('copy', function(e) {
    // 取得使用者本來圈選的文字
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    // 如果使用者真的有選到字才進行修改（避免空白複製也觸發）
    if (selectedText.trim().length > 0) {
        e.preventDefault(); // 攔截預設的複製內容
        
        // 建立自動追加的版權尾巴
        const copyrightTail = 
`

ꕀꕀꕀꕀ溺於夢中的文海ꕀꕀꕀꕀ
【默黓版權所有｜轉載請註明出處】
作者網址：${window.location.href}
注意：私自偷取文字的人，電腦資料會被洛奇給看光～光唷 (ﾟ∀ﾟ)！`;

        // 整合原本的文字與版權尾巴，強制塞進使用者的剪貼簿
        e.clipboardData.setData('text/plain', selectedText + copyrightTail);
    }
});

//基礎選取限制
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});