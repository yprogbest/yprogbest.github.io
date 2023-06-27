// 各記事の「続きを見る」ボタンの処理
function showFullArticle(event, articleId) {
  var button = event.target;
  var fullArticle = document.querySelector('#' + articleId);

  if (fullArticle.classList.contains('hidden')) {
    fullArticle.classList.remove('hidden');
    button.innerText = '閉じる';  // ボタンのテキストを変更するなど、必要に応じて追加の処理を行う
  } else {
    fullArticle.classList.add('hidden');
    button.innerText = '続きを見る';
  }
}


// スクロール用のボタンの処理
function scrollArticle(event){
  
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}



//H1タグのレイアウト（ネオン管風）
function h1Layout(event){
  
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

