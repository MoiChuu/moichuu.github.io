// link.js

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