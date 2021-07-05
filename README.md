# Salte Filter

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![CI Build][github-actions-image]][github-actions-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![semantic-release][semantic-release-image]][semantic-release-url]

Registers filter components allowing for a single input and output!

## Install

You can install this package either with `npm` or with `bower`.

## npm

```sh
$ npm install salte-filter
```
Then add a `<script>` to your index.html:
```html
<script src="/node_modules/salte-filter/salte-filter.js"></script>
```
Or `require('salte-filter')` from your code.

## bower

```sh
$ bower install salte-io/salte-filter
```
Then add a `<script>` to your index.html:
```html
<script src="/bower_components/salte-filter/salte-filter.js"></script>
```

## Example

[Live Demo](https://jsbin.com/guyoyelupe/edit?html,js,output)

## Usage

```html
<salte-filter data="myData" filtered-data="myFilteredData">
  <my-custom-filter></my-custom-filter>
</salte-filter>
```

## Documentation

`salteFilter` must be required into your component in order to be used

### `(add/remove)Filter`
* **`filter`:** A filter to be called anytime the filter function is called

```javascript
const component = {
  require: {
    parent: '^salteFilter'
  },
  controller: () => {
    const view = this;

    view.filter = (item) => {
      // ... returns the item if the function returns truthy
    };

    view.$onInit = () => {
      // This will add the filter
      view.parent.addFilter(view.filter);
      // This will remove the filter
      view.parent.removeFilter(view.filter);
    };
  }
}
```

### `(add/remove)FilterListener`
* **`listener`:** A listener to be called anytime the filter function is called

```javascript
const component = {
  require: {
    parent: '^salteFilter'
  },
  controller: () => {
    const view = this;

    view.onFilter = (filteredData) => {
      // ...
    };

    view.$onInit = () => {
      // This will add the listener
      view.parent.addFilterListener(view.onFilter);
      // This will remove the listener
      view.parent.removeFilterListener(view.onFilter);
    };
  }
}
```

### `filter`

Runs all of the filters, useful for triggering a filter when an input value is changed

[npm-version-image]: https://img.shields.io/npm/v/salte-filter.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/salte-filter.svg?style=flat
[npm-url]: https://npmjs.org/package/salte-filter

[github-actions-image]: https://github.com/salte-io/salte-filter/actions/workflows/ci.yml/badge.svg?branch=main
[github-actions-url]: https://github.com/salte-io/salte-filter/actions/workflows/ci.yml

[coveralls-image]: https://img.shields.io/coveralls/salte-io/salte-filter/main.svg
[coveralls-url]: https://coveralls.io/github/salte-io/salte-filter

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
