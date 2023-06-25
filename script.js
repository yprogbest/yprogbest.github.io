function showFullArticle(event, articleId) {
  var button = event.target;
  var article = document.getElementById(articleId);
  var fullArticle = article.querySelector('.full-article');

  fullArticle.classList.remove('hidden');
  fullArticle.style.display = 'block';
  button.style.display = 'none';
}

