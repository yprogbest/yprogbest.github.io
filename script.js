function showFullArticle(event) {
  var button = event.target;
  var fullArticle = button.nextElementSibling;
  
  fullArticle.classList.remove('hidden');
  button.style.display = 'none';
}
