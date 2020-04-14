function colorsTitleCards() {
  const colors = ['#5083ae', '#6da0a1', '#deb164', '#be5d45']
  const $title = document.getElementsByClassName('card__text-title');

  colors.map((color, index) => $title[index].style.color = color)
}
