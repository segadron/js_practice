const solution = str => (str.split(' ').map(item => (item[0].toUpperCase() + item.substr(1, item.length))).join(' '))
