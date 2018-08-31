module.exports = {
  create(data, each, end) {
    let l = {
      i: 0,
      k: [],
      d: data,
      next() {
        if (!l.k[l.i]) return end()

        let n = l.i++
        each(l.d[l.k[n]], l.k[n])
      }
    }

    for (let k in data) l.k.push(k)

    l.next()
    return l
  }
}
