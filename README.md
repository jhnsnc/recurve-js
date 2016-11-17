Recurve JS
==========

Recurve is a simple utility library for manipulating mathematical functions or values. The most obvious applications are creating easing functions for motion, manipulating the distribution of random numbers, and use for general interpolation.

You can see a [demo of the easing functions](http://codepen.io/jhnsnc/pen/EgzwjA/) on Codepen.

Planned features include:

- complete set of Penner easing functions
- utilities for creating simple splines/Bézier curves
- utilities for better controlling distributions (e.g. Bell curve)
- support for specialized interpolation methods (e.g. multidimensional vectors, colors, etc) or integration with another library that does so
- demos to illustrate potential uses of the functions
- better build process

Note that this project is in Alpha. All functions and the overall structure of the project are subject to change or deletion until the v1.0 is released.

Usage
-----

When you load `recurve.js` on a page, `recurve` will be made available on the global `window` object. You can then use any of the functions listed below.

You can grab a copy of the current version of Recurve from the `dist/` folder in this repo.

Available functions:

- `normalize.repeat` - Maps any number to the range `[0.0, 1.0)`, wrapping back to `0.0` each time the input value would normally reach a whole number. Output for the range of all possible inputs resembles a modified [Sawtooth wave](https://en.wikipedia.org/wiki/Sawtooth_wave).
- `normalize.pingpong` - Maps any number to the range `[0.0, 1.0]`, interpolating towards `1.0` for even numbers and interpolating back towards `0.0` for odd numbers. Output for the range of all possible inputs resembles a modified [Triangle wave](https://en.wikipedia.org/wiki/Triangle_wave).
- `normalize.clamp` - Clamps any number to the range `[0.0, 1.0]`, returning `0.0` for any negative inputs and returning `1.0` for any input value larger than `1.0`.

- `ease.Quad.in`, `ease.Quad.out`, and `ease.Quad.inOut` - Easing based on the second-power function `y = x^2`.
- `ease.Cubic.in`, `ease.Cubic.out`, and `ease.Cubic.inOut` - Easing based on the third-power function `y = x^3`.
- `ease.Quart.in`, `ease.Quart.out`, and `ease.Quart.inOut` - Easing based on the fourth-power function `y = x^4`.
- `ease.Quint.in`, `ease.Quint.out`, and `ease.Quint.inOut` - Easing based on the fifth-power function `y = x^5`. Also known as Strong in some libraries.
- `ease.Sine.in`, `ease.Sine.out`, and `ease.Sine.inOut` - Easing based on the shape of a [Sine wave](https://en.wikipedia.org/wiki/Sine_wave).
- `ease.Circ.in`, `ease.Circ.out`, and `ease.Circ.inOut` - Easing that follows the curvature of a circle quadrant.
- `ease.Expo.in`, `ease.Expo.out`, and `ease.Expo.inOut` - Easing created by modifying the exponent of a base number. The base number can optionally be specified with the second parameter and defaults to `2`.
- `ease.Back.in`, `ease.Back.out`, and `ease.Back.inOut` - Easing that starts or ends by extending beyond the limits of the range `[0.0, 1.0]`. The amount is influenced by the optional second parameter, which defaults to `1.70158`.
- `ease.Elastic.in`, `ease.Elastic.out`, and `ease.Elastic.inOut` - Easing reminiscent of the motion of a spring.
- `ease.Bounce.in`, `ease.Bounce.out`, and `ease.Bounce.inOut` - Easing reminiscent of the motion of a bouncing ball. Bounces 3 times, decreasing height by a factor of `0.25` with each bounce.
- `ease.Linear` - Simply returns the input parameter. Useful when an easing function is required but no calculations should be performed.
- `ease.maxValue` - Always returns `1.0`.
- `ease.minValue` - Always returns `0.0`.
- `ease.constant` - Always returns the value of the second parameter, can be curried for use in expressive composition chaining.
- `ease.inverse` - Returns `1.0 - n`. Useful for expressive chains when composing.

- `ease.SmoothStep` - Coming soon.
- `ease.Bezier` - Coming soon. Custom cubic Bézier curve easing.

- `compose.weighted` - Accepts an array of easing functions and an array of weights. Returns a function that represents the input easing functions stitched together end-to-end, each scaled based on the relative weights provided. The returned function still operates on inputs and returns values in the range `[0.0, 1.0]`, assuming each of the provided functions do the same.
- `compose.piecewise` - Accepts an array of easing functions and an array of weights. Returns a function that represents the input easing functions stitched together end-to-end, each scaled such that the function's influence begins at the input specified by the corresponding offset given. The first offset is expected to be `0.0`. The returned function still operates on inputs and returns values in the range `[0.0, 1.0]`, assuming each of the provided functions do the same.

Why 0..1?
---------

Most of the math involved with these utility functions focuses on the range between `0.0` and `1.0`. This makes functions easier to understand since they will normally require only 1 or 2 parameters.

It also makes them very flexible. The same range of numbers is typically used for percentages, random numbers, progress/timing variables, etc. The `ease` functions in this library accept *and* return values in the range `[0.0, 1.0]`, making them easy to chain together.

Numbers in this range have interesting mathematical properties. For example, any number in this range multiplied by another number in the range will result in a number between `0.0` and `1.0`. This means that functions like `Math.random()`, which operate on the same range, can be used in combination with these functions for all sorts of interesting purposes.

For use in general interpolation, use a simple Slope-intercept equation: `y = mx + b` or `interpolated_value = (range * easing(n)) + min_value`, where `n` is some value used for interpolation, such as time, progress, relative position, etc.

Development
-----------

If you wish to build this project yourself, download the repo and then install dependencies.

```
npm install
```

You can then build a minified version or build a development version, which will watch for changes and rebuild as needed.

```
npm run build

npm run watch
```
