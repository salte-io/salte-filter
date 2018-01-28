import { expect } from 'chai';

import salteFilter from '../../src/salte-filter.module.js';

describe('component(salte-filter)', () => {
  let scope, component, controller;

  beforeEach(angular.mock.module(salteFilter));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    scope.data = [{ business: 'Salte' }, { business: 'Google' }];
    scope.onFilter = sinon.spy();
    component = $compile(`
      <salte-filter
        data="data"
        filtered-data="filteredData"
        on-filter="onFilter(filteredData)">
      </salte-filter>
    `)(scope);
    controller = component.controller('salteFilter');
    scope.$digest();
  }));

  describe('function(filter)', () => {
    it('should return a dereferenced version of the original data if no filters are defined', () => {
      expect(scope.filteredData).to.deep.equal(scope.data);
      scope.filteredData.push({ business: 'Valve' });
      expect(scope.filteredData).not.to.deep.equal(scope.data);
    });

    it('should filter when a filter is added or removed', () => {
      function filter(data) {
        return data.business === 'Salte';
      }

      expect(scope.filteredData).to.deep.equal(scope.data);
      controller.addFilter(filter);
      scope.$digest();
      expect(scope.filteredData).to.deep.equal([{ business: 'Salte' }]);
      controller.removeFilter(filter);
      scope.$digest();
      expect(scope.filteredData).to.deep.equal(scope.data);
    });

    it('should filter when the input data is modified', () => {
      expect(scope.filteredData).to.deep.equal(scope.data);
      scope.data = [{ restaurant: 'Taco Bell' }];
      scope.$digest();
      expect(scope.filteredData).to.deep.equal(scope.data);
    });

    it('should not filter when an individual element is pushed or popped from the input data', () => {
      expect(scope.filteredData).to.deep.equal(scope.data);
      scope.data.push({ business: 'Twitch' });
      scope.$digest();
      expect(scope.filteredData).to.deep.equal([{ business: 'Salte' }, { business: 'Google' }]);
    });

    it('should allow the add a filter listener', () => {
      const listener = sinon.spy();
      controller.addFilterListener(listener);
      controller.filter();
      expect(listener.callCount).to.deep.equal(1);
      controller.removeFilterListener(listener);
      controller.filter();
      expect(listener.callCount).to.deep.equal(1);
    });
  });

  describe('binding(onFilter)', () => {
    it('should call onFilter initially', () => {
      expect(scope.onFilter.callCount).to.deep.equal(1);
      expect(scope.onFilter.calledWith(scope.filteredData)).to.deep.equal(true);
    });

    it('should call onFilter when filter() is called', () => {
      expect(scope.onFilter.callCount).to.deep.equal(1);
      expect(scope.onFilter.calledWith(scope.filteredData)).to.deep.equal(true);
      controller.filter();
      expect(scope.onFilter.callCount).to.deep.equal(2);
      expect(scope.onFilter.calledWith(scope.filteredData)).to.deep.equal(true);
    });

    it('should call onFilter when data is changed', () => {
      expect(scope.onFilter.callCount).to.deep.equal(1);
      expect(scope.onFilter.calledWith(scope.filteredData)).to.deep.equal(true);
      scope.data = [{ restaurant: 'Taco Bell' }];
      scope.$digest();
      expect(scope.onFilter.callCount).to.deep.equal(2);
      expect(scope.onFilter.calledWith(scope.filteredData)).to.deep.equal(true);
    });
  });
});
