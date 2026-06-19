// link.js

//後台彩蛋
console.log(
    "%c你也很好奇構造嗎 👀", 
    "color: #c9a24a; background: #0a0b0d; font-size: 20px; padding: 10px 20px; border-radius: 5px; font-weight: bold; border: 1px solid #d4af37;"
);
console.log("%c【默黓｜版權所有】來都來了，不如去留言板留下足跡吧！✨", "color: #b3b3cc; font-size: 13px;");

//右鍵浮動警告
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 攔截預設的右鍵選單
    
    // 建立小浮窗
    const toast = document.createElement('div');
    toast.innerText = "猴～小手收壞壞";
    
    // 浮窗樣式
    Object.assign(toast.style, {
        position: 'fixed',
        left: `${e.clientX + 10}px`,
        top: `${e.clientY + 10}px`,
        background: 'rgba(12, 12, 14, 0.95)',
        color: '#2BFF00',
        padding: '10px 18px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        border: '1px solid rgba(43, 255, 0, 0.5)',
        boxShadow: '0 0 12px rgba(43, 255, 0, 0.25)',
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

默黓的記憶櫥窗

感謝你帶走這段文字……
但我還是希望你能夠尊重原作。

【默黓版權所有｜轉載請註明出處】
作者網站：${window.location.href}`;

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

// 展開收合
const MAX_OPEN = 2;

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {
  item.querySelector("summary").addEventListener("click", (e) => {
    const isOpen = item.open;

    if (!isOpen) {
      const openItems = [...accordions].filter(i => i.open);

      if (openItems.length >= MAX_OPEN) {
        openItems[0].open = false;
      }
    }
  });
});