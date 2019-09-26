const addDigits = num => {
	const arr = (number) => (String(number).split('').map((item) => (Number(item))))//функция создания массива из входного числа
	const ArrSum = (number) => (arr(number).reduce((sum, item) => (sum += item), 0))// функция подсчёта суммы элементов массива
	return String(ArrSum(num)).length > 1 ? addDigits(ArrSum(num)) : ArrSum(num)
}

