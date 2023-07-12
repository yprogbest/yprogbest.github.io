// スクロール用のボタンの処理
function scrollArticle(event){
  
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}



//H1タグのレイアウト（ネオン管風）
function h1Layout(){
  
  const target = window.document.getElementsByTagName('h1')[0]
  
  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
  const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
  const flickerAndColorText = text => 
    text
      .split('')
      .map(flickerLetter)
      .map(colorLetter)
      .join('');
  const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);
  
  neonGlory(target);
  target.onclick = ({ target }) =>  neonGlory(target);
}

// DOMの読み込みが完了したら実行する
document.addEventListener("DOMContentLoaded", function() {
  h1Layout();
});

