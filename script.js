function showFullArticle(event) {
  var button = event.target;
  var article = button.parentNode;
  var fullArticle = article.querySelector('.full-article');

  fullArticle.classList.remove('hidden');
  fullArticle.style.display = 'block';
  button.style.display = 'none';
}
