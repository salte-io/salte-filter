import template from './salte-filter.html';
import controller from './salte-filter.controller.js';

export default {
  transclude: true,
  template,
  controller,
  bindings: {
    data: '<',
    filteredData: '=',
    onFilter: '&'
  }
};
