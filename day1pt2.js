'use strict'
const input = require('fs').readFileSync('./input', 'utf8').trim().split('\n')
  .map(x => parseInt(x))

let found = false
let i = 0
let results = []
while (!found) {
  const result = (results[results.length - 1] || 0) + input[i]
  if (results.includes(result)) {
    console.log(result)
    found = true
  }
  results.push(result)
  ++i
  i %= input.length
}
