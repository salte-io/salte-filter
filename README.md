# Salte Filter
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

## Documentation

### Filters

```javascript
const component = {
  require: {
    parent: '^salteFilter'
  },
  controller: () => {
    const view = this;

    view.filter = (item) => {
      // ...
    };

    view.$onInit = () => {
      view.parent.addFilter(view.filter);
    };
  }
}
```

### Filter Listeners

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
      view.parent.addFilterListener(view.onFilter);
    };
  }
}
```

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
