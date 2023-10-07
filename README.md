<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logistic

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Logistic distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-logistic
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var logistic = require( '@stdlib/stats-base-dists-logistic' );
```

#### logistic

Logistic distribution.

```javascript
var dist = logistic;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/cdf]</span><span class="delimiter">: </span><span class="description">logistic distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/logcdf]</span><span class="delimiter">: </span><span class="description">logistic distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/logpdf]</span><span class="delimiter">: </span><span class="description">logistic distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, s )`][@stdlib/stats/base/dists/logistic/mgf]</span><span class="delimiter">: </span><span class="description">logistic distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/pdf]</span><span class="delimiter">: </span><span class="description">logistic distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, s )`][@stdlib/stats/base/dists/logistic/quantile]</span><span class="delimiter">: </span><span class="description">logistic distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, s )`][@stdlib/stats/base/dists/logistic/entropy]</span><span class="delimiter">: </span><span class="description">logistic distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, s )`][@stdlib/stats/base/dists/logistic/kurtosis]</span><span class="delimiter">: </span><span class="description">logistic distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, s )`][@stdlib/stats/base/dists/logistic/mean]</span><span class="delimiter">: </span><span class="description">logistic distribution expected value.</span>
-   <span class="signature">[`median( mu, s )`][@stdlib/stats/base/dists/logistic/median]</span><span class="delimiter">: </span><span class="description">logistic distribution median.</span>
-   <span class="signature">[`mode( mu, s )`][@stdlib/stats/base/dists/logistic/mode]</span><span class="delimiter">: </span><span class="description">logistic distribution mode.</span>
-   <span class="signature">[`skewness( mu, s )`][@stdlib/stats/base/dists/logistic/skewness]</span><span class="delimiter">: </span><span class="description">logistic distribution skewness.</span>
-   <span class="signature">[`stdev( mu, s )`][@stdlib/stats/base/dists/logistic/stdev]</span><span class="delimiter">: </span><span class="description">logistic distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, s )`][@stdlib/stats/base/dists/logistic/variance]</span><span class="delimiter">: </span><span class="description">logistic distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [logistic][logistic-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Logistic( [mu, s] )`][@stdlib/stats/base/dists/logistic/ctor]</span><span class="delimiter">: </span><span class="description">logistic distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Logistic = require( '@stdlib/stats-base-dists-logistic' ).Logistic;

var dist = new Logistic( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns 0.0625
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var logistic = require( '@stdlib/stats-base-dists-logistic' );

console.log( objectKeys( logistic ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-logistic.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-logistic

[test-image]: https://github.com/stdlib-js/stats-base-dists-logistic/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-logistic/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-logistic/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-logistic?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-logistic.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-logistic/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-logistic/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-logistic/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-logistic/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-logistic/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-logistic/main/LICENSE

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/logistic/ctor]: https://github.com/stdlib-js/stats-base-dists-logistic-ctor

[@stdlib/stats/base/dists/logistic/entropy]: https://github.com/stdlib-js/stats-base-dists-logistic-entropy

[@stdlib/stats/base/dists/logistic/kurtosis]: https://github.com/stdlib-js/stats-base-dists-logistic-kurtosis

[@stdlib/stats/base/dists/logistic/mean]: https://github.com/stdlib-js/stats-base-dists-logistic-mean

[@stdlib/stats/base/dists/logistic/median]: https://github.com/stdlib-js/stats-base-dists-logistic-median

[@stdlib/stats/base/dists/logistic/mode]: https://github.com/stdlib-js/stats-base-dists-logistic-mode

[@stdlib/stats/base/dists/logistic/skewness]: https://github.com/stdlib-js/stats-base-dists-logistic-skewness

[@stdlib/stats/base/dists/logistic/stdev]: https://github.com/stdlib-js/stats-base-dists-logistic-stdev

[@stdlib/stats/base/dists/logistic/variance]: https://github.com/stdlib-js/stats-base-dists-logistic-variance

[@stdlib/stats/base/dists/logistic/cdf]: https://github.com/stdlib-js/stats-base-dists-logistic-cdf

[@stdlib/stats/base/dists/logistic/logcdf]: https://github.com/stdlib-js/stats-base-dists-logistic-logcdf

[@stdlib/stats/base/dists/logistic/logpdf]: https://github.com/stdlib-js/stats-base-dists-logistic-logpdf

[@stdlib/stats/base/dists/logistic/mgf]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf

[@stdlib/stats/base/dists/logistic/pdf]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf

[@stdlib/stats/base/dists/logistic/quantile]: https://github.com/stdlib-js/stats-base-dists-logistic-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
