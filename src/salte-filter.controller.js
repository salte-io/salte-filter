export default class SalteFilter {
  constructor() {
    this.filters = [];
    this.listeners = [];
  }

  $onChanges(changes) {
    if (changes.data) {
      this.filter();
    }
  }

  filter() {
    this.filteredData = [];
    if (this.data) {
      this.data.forEach((data) => {
        let valid = true;
        this.filters.forEach((filter) => {
          if (!filter(data)) {
            valid = false;
          }
        });
        if (valid) {
          this.filteredData.push(data);
        }
      });
    }
    this.listeners.forEach((listener) => listener(this.filteredData));
  }

  addFilter(filter) {
    if (this.filters.indexOf(filter) === -1) {
      this.filters.push(filter);
      this.filter();
    }
  }

  addFilterListener(listener) {
    if (!listener) return;
    this.listeners.push(listener);
  }

  removeFilterListener(listener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  removeFilter(filter) {
    const index = this.filters.indexOf(filter);
    if (index !== -1) {
      this.filters.splice(index, 1);
      this.filter();
    }
  }
}
