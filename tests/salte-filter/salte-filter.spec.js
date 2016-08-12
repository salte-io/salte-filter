import salteFilter from '../../src/salte-filter.module.js';

describe('component(salte-filter)', () => {
  let scope, component, controller;

  beforeEach(angular.mock.module(salteFilter));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    scope.data = [{ business: 'Salte' }, { business: 'Google' }];
    component = $compile('<salte-filter data="data" filtered-data="filteredData"></salte-filter>')(scope);
    controller = component.controller('salteFilter');
    scope.$digest();
  }));

  describe('function(filter)', () => {
    it('should return a dereferenced version of the original data if no filters are defined', () => {
      expect(scope.filteredData).toEqual(scope.data);
      scope.filteredData.push({ business: 'Valve' });
      expect(scope.filteredData).not.toEqual(scope.data);
    });

    it('should filter when a filter is added or removed', () => {
      function filter(data) {
        return data.business === 'Salte';
      }

      expect(scope.filteredData).toEqual(scope.data);
      controller.addFilter(filter);
      scope.$digest();
      expect(scope.filteredData).toEqual([{ business: 'Salte' }]);
      controller.removeFilter(filter);
      scope.$digest();
      expect(scope.filteredData).toEqual(scope.data);
    });

    it('should filter when the input data is modified', () => {
      expect(scope.filteredData).toEqual(scope.data);
      scope.data = [{ restaurant: 'Taco Bell' }];
      scope.$digest();
      expect(scope.filteredData).toEqual(scope.data);
    });

    it('should not filter when an individual element is pushed or popped from the input data', () => {
      expect(scope.filteredData).toEqual(scope.data);
      scope.data.push({ business: 'Twitch' });
      scope.$digest();
      expect(scope.filteredData).toEqual([{ business: 'Salte' }, { business: 'Google' }]);
    });

    it('should allow the add a filter listener', () => {
      const listener = sinon.spy();
      controller.addFilterListener(listener);
      controller.filter();
      expect(listener.callCount).toEqual(1);
      controller.removeFilterListener(listener);
      controller.filter();
      expect(listener.callCount).toEqual(1);
    });
  });
});
