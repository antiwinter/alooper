## What is **alooper** ?

**alooper** stands for **Array Looper**, and it loops array items after each callback in a rather straightforward way.

## Installation

```
npm i --save alooper
```

## How to use

### Example 1: loop an array

```js
const alooper = require('alooper')

let foo = [1, 2, 3, 4]

function someProcess(x, done) {
  setTimeout(() => {
    done(x + 1)
  }, 1000)
}

let looper = alooper.create(
  // the data to be processed
  foo,

  // the function to process each item
  d => {
    console.log('processing foo', d)
    someProcess(d, r => {
      console.log(r)

      // after processed one item, trigger next
      looper.next()
    })
  },

  // the function to call after all items are processed
  () => {
    console.log('foo is processed')
  }
)
```

outputs

```
processing foo 1
2
processing foo 2
3
processing foo 3
4
processing foo 4
5
foo is processed
```

### Example 2: loop an object

```js
const alooper = require('alooper')

let bar = { a: 100, b: 200, c: 300, d: 400 }

function someProcess(x, done) {
  setTimeout(() => {
    done(x + 1)
  }, 1000)
}

let looper2 = alooper.create(
  bar,
  (d, k) => {
    console.log('processing bar', k, d)
    someProcess(d, r => {
      console.log(r)
      looper2.next()
    })
  },
  () => {
    console.log('bar is processed')
  }
)
```

outputs

```
processing bar a 100
101
processing bar b 200
201
processing bar c 300
301
processing bar d 400
401
bar is processed
```
