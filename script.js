function showFullArticle(event) {
  var button = event.target;
  var article = button.parentNode;
  var fullArticle = article.querySelector('.full-article');

  if (fullArticle.classList.contains('hidden')) {
    fullArticle.classList.remove('hidden');
    fullArticle.style.display = 'block';
    button.textContent = '閉じる';  // ボタンのテキストを変更するなど、必要に応じて追加の処理を行う
  } else {
    fullArticle.classList.add('hidden');
    fullArticle.style.display = 'none';
    button.textContent = '続きを見る';
  }
}
