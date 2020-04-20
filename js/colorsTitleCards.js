/**
 * @function colorsTitleCards
 * @param none
 * @return {undefined}
 * @description Generate a style color for each title on the cards in the main section
*/

const colorsTitleCards = function () {
  const colors = ['#5083ae', '#6da0a1', '#deb164', '#be5d45']
  const $title = document.getElementsByClassName('card__text-title');

  colors.map((color, index) => $title[index].style.color = color)
}

module.exports = colorsTitleCards;