const abbrevName = name => {
  let arr = name.split(' ')
  arr.forEach((item, i, arr) => arr[i] = item[0].toUpperCase())
  return arr.join('.')
}

console.log(abbrevName('Sam Harris'))