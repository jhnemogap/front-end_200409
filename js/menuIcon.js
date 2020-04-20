/**
 * @function doVisibleNav
 * @param none
 * @return {undefined}
 * @description Toggle between one class or another of the navigation bar to allow it to appear or disappear
*/

function doVisibleNav() {
  const $headerNav = document.getElementById('header__nav');
  $headerNav.classList.toggle('header__nav--visible');
  $headerNav.classList.toggle('header__nav--hidden');
};
