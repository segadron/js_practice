function solution (roman) {
  const roman_dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let arr = roman.split('')
  console.log(arr)
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (roman_dict[arr[i]] < roman_dict[arr[i + 1]]) {
      sum += roman_dict[arr[i + 1]] - roman_dict[arr[i]]
      i++
    } else {
      sum += roman_dict[arr[i]]
    }
  }
  return sum
}

console.log(solution('XIV'))