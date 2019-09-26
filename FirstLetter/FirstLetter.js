const solution = str => (str.split(' ').map((item, i) => (item[0].toUpperCase() + item.substr(1, item.length))).join(' '))
