import angular from 'angular';
import salteFilter from './salte-filter.component.js';

const module = angular.module('salte.filter', []);

module.component('salteFilter', salteFilter);

export default module.name;
