const alooper = require('./')

let foo = [1, 2, 3, 4]
let bar = { a: 100, b: 200, c: 300, d: 400 }

function someProcess(x, done) {
  setTimeout(() => {
    done(x + 1)
  }, 1000)
}

// Example 1: loop an array
let looper = alooper.create(
  foo,
  d => {
    console.log('processing foo', d)
    someProcess(d, r => {
      console.log(r)

      // after processed, trigger next
      looper.next()
    })
  },
  () => {
    console.log('foo is processed\n')

    // Example 2: loop an object

    let looper2 = alooper.create(
      bar,
      (d, k) => {
        console.log('processing bar', k, d)
        someProcess(d, r => {
          console.log(r)

          // after processed, trigger next
          looper2.next()
        })
      },
      () => {
        console.log('bar is processed')
      }
    )
  }
)
