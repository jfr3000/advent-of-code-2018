'use strict'
const input = require('fs').readFileSync('./input', 'utf8').trim().split('\n')

const res = input.reduce((acc, curr) => {
  const occs = curr.split('').reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1
    return a
  }, {})
  if (Object.values(occs).includes(2)) acc.twos++
  if (Object.values(occs).includes(3)) acc.threes++
  return acc
}, {twos: 0, threes: 0})

console.log(res.twos * res.threes)
