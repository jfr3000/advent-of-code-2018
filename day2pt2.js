'use strict'
const input = require('fs').readFileSync('./input', 'utf8').trim().split('\n')

const id = input.find((id, i) => {
  if (i === input.length - 1) return
  const others = input.slice(i + 1)
  return others.some(otherId => {
    let noMatch = 0
    for (let j = 0; j < otherId.length; j++) {
      if (otherId[j] !== id[j]) noMatch++
    }
    if (noMatch === 1) {
      console.log(otherId)
      return true
    }
  })
})

console.log(id)
