function showFullArticle() {
  var fullArticle = event.target.nextElementSibling;
  fullArticle.classList.remove('hidden');
  event.target.style.display = 'none';
}
