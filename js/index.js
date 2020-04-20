/**
 * Javascript code entry point
 * @author @jhnemogap
*/

/**
 * DOM elements - menu icon button and nav button
 * @global
*/
const $btnMenuIcon = document.getElementById('menu-icon-btn');
const $btnNav = document.getElementById('nav-btn');

// Adding listening events to menu buttons and all nav
$btnMenuIcon.addEventListener('click', doVisibleNav);
$btnNav.addEventListener('click', doVisibleNav);

// Activating the card title coloring
colorsTitleCards();
