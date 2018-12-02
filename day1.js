'use strict'
const input = require('fs').readFileSync('./input', 'utf8').trim().split('\n')
  .map(x => parseInt(x))

console.log(input.reduce((acc, curr) => acc + curr))

