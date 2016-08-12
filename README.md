# Salte Filter

[![Join the chat at https://gitter.im/salte-io/salte-filter](https://badges.gitter.im/salte-io/salte-filter.svg)](https://gitter.im/salte-io/salte-filter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Travis][travis-ci-image]][travis-ci-url]
[![Coveralls][coveralls-image]][coveralls-url]

Registers filter components allowing for a single input and output!

## Install

You can install this package with `npm`

## npm

```sh
$ npm install salte-filter
```
Then add a `<script>` to your index.html:
```html
<script src="/node_modules/salte-filter/salte-filter.js"></script>
```
Or `require('salte-filter')` from your code.

## Example

[Live Demo](https://jsbin.com/guyoyelupe/edit?html,js,output)

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

## License

The MIT License

Copyright (c) 2012-2016 Salte. https://salte.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[npm-version-image]: http://img.shields.io/npm/v/salte-filter.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/salte-filter.svg?style=flat
[npm-url]: https://npmjs.org/package/salte-filter

[travis-ci-image]: https://img.shields.io/travis/salte-io/salte-filter.svg?style=flat
[travis-ci-url]: https://travis-ci.org/salte-io/salte-filter

[coveralls-image]: https://img.shields.io/coveralls/salte-io/salte-filter/master.svg
[coveralls-url]: https://coveralls.io/github/salte-io/salte-filter
