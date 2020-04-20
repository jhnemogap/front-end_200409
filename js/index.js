/**
 * Javascript code entry point
 * @author @jhnemogap
 * @constant {elementHTML} {$btnMenuIcon}
 * @constant {elementHTML} {$btnNav}
*/

const { doVisibleNav } = require('./menuIcon.js');
const colorsTitleCards = require('./colorsTitleCards.js');
const AddEventsMassively = require('./addEventsMassively.js');

const $btnMenuIcon = document.getElementById('menu-icon-btn');
const $btnNav = document.getElementById('nav-btn');
const addEventsMassively = new AddEventsMassively();

// Adding listening events to menu buttons and all nav
$btnMenuIcon.addEventListener('click', doVisibleNav);
$btnNav.addEventListener('click', doVisibleNav);

// Activating the card title coloring
colorsTitleCards();

// Add events in bulk mode, some logic to elements that look like buttons or Cards links
addEventsMassively.active();
