// https://codereview.stackexchange.com/a/134230
// Promise.all polyfill
// Promise.all = (promises) => {
//     return new Promise(function(resolve,reject) {
//       var count = promises.length
//       var result = []
//       var checkDone = function() { if (--count === 0) resolve(result) }
//       promises.forEach(function(p, i) {
//         p.then(function(x) { result[i] = x }, reject).then(checkDone)
//       })
//     })
//   }


const append = (a = [], x = null) =>
  [...a, x]

const lift2 = f =>
  (px, py) => px.then(x => py.then(y => f(x, y)))

Promise.all = (promises = []) =>
  promises.reduce(lift2(append), Promise.resolve([]))
