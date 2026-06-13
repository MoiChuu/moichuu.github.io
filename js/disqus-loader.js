// disqus-loader.js

document.addEventListener("DOMContentLoaded", function () {
  var d = document, s = d.createElement('script');
  s.src = 'https://moichu.disqus.com/count.js';
  s.id = 'dsq-count-scr';
  s.async = true;
  (d.head || d.body).appendChild(s);

  const btn = document.getElementById("loadBtn");
  if (btn) {
    btn.addEventListener("click", function loadDisqus() {
      btn.innerText = "載入中...";
      btn.disabled = true;

      var sEmbed = d.createElement('script');
      sEmbed.src = 'https://moichu.disqus.com/embed.js';
      sEmbed.setAttribute('data-timestamp', +new Date());

      sEmbed.onload = function() {
        btn.style.display = "none";
      };

      (d.head || d.body).appendChild(sEmbed);
    });
  }
});