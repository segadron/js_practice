function findMultiples (integer, limit) {
  let multiples = integer
  let res = []
  for (let i = 0; multiples <= limit; i++) {
    if (multiples % integer === 0) {
      res.push(multiples)
      multiples += integer
    }
  }
  return res
}

console.log(findMultiples(3, 9))