module.exports = {
  create(data, each, end) {
    let l = {
      i: 0,
      k: [],
      d: data,
      next() {
        let k = l.k[l.i++]
        if (!k) return end ? end() : 0
        each(l.d[k], k)
      }
    }

    for (let k in l.d) l.k.push(k)

    l.next()
    return l
  }
}
