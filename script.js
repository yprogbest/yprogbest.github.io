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

