/**
 * Create a singleton AddEventsMassively
 * @class AddEventsMassively
 * @return {AddEventsMassively} returns the same instance always
 * @description Lets bring certain elements from the DOM and then add click events to it.
*/

class AddEventsMassively {
  /** @lends AddEventsMassively */
    constructor() {
    if(!AddEventsMassively.instance){
      AddEventsMassively.instance = this;
      /** @member {Array} */
      this.__aryAddEvent = [document.getElementById('menu-icon-btn'), document.getElementById('nav-btn')];
      this.__aryAddEvent.push(...document.querySelectorAll('.header a'));
      this.__aryAddEvent.push(...document.querySelectorAll('.cards-service > a'));
      this.__aryAddEvent.push(...document.getElementsByClassName('read-more'));
    }
    return AddEventsMassively.instance;
  }

  /**
   * @description Add event to click all elements.
   * 1 to print in console id and count
   * 2 change style in other element button
   * 3 (opt) no propagate in specific elements in the navbar
  */
  active() {
    this.__aryAddEvent.map(function($item, index, $ary) {
      let count = 0;
      const aryLength = $ary.length;
      let otherIndex = index + parseInt(aryLength / 2);
      otherIndex = otherIndex >= aryLength ? otherIndex - aryLength : otherIndex;

      function printMyStatus() {
        ++count;
        console.info(`Id: ${index + 1}\nCount: ${count}`)
      }

      return $item.addEventListener('click', () => {
        printMyStatus();

        $ary[otherIndex].style.border = 'solid 3px red';

        if (index >= 3 && index <= 5) {
          console.info('I’m not propagating')
          event.stopPropagation();
        }
      });
    });
  }
}

module.exports = AddEventsMassively;
