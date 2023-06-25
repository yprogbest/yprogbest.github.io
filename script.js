function showFullArticle(event, articleId) {
  var button = event.target;
  var article = button.parentNode;
  var fullArticle = article.querySelector('#' + articleId);

  if (fullArticle.classList.contains('hidden')) {
    fullArticle.classList.remove('hidden');
    button.textContent = '閉じる';  // ボタンのテキストを変更するなど、必要に応じて追加の処理を行う
  } else {
    fullArticle.classList.add('hidden');
    button.textContent = '続きを見る';
  }
}

