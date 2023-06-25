function showFullArticle(event) {
  var button = event.target;
  var article = button.parentNode;
  var summary = article.querySelector('.summary');
  var fullArticle = article.querySelector('.full-article');
  
  summary.style.display = 'none';
  fullArticle.classList.remove('hidden');
  button.style.display = 'none';
}
