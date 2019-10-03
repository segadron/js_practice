const cakes = (recipe, available) => {
	let ArrOfRecipe = []
	for (let key1 in recipe)
		ArrOfRecipe.push(key1)
	let ArrOfAvailable = []
	for (let key2 in available)
		ArrOfAvailable.push(key2)
	if (ArrOfAvailable.length === 0) return 0
	const test = ArrOfAvailable.every(() => (ArrOfRecipe.every((ItemOfRecipe, j) => (ArrOfAvailable.includes(ArrOfRecipe[j])))))
	const diff = ArrOfAvailable.filter(item => (ArrOfRecipe.indexOf(item) === -1))
	const removeObjectProperties = (obj, props) => {
		for (let i = 0; i < props.length; i++)
			if (obj.hasOwnProperty(props[i]))
				delete obj[props[i]]
	}
	removeObjectProperties(available, diff)
	const SortRecipe = Object.entries(recipe).sort()
	const NeedProducts = Object.entries(available).sort()
	const relations = []
	if (test) {
		for (let i = 0; i < NeedProducts.length; i++) {
			relations.push(Math.trunc(NeedProducts[i][1] / SortRecipe[i][1]))
		}
		if (relations.filter((item) => (item >= 1)).length === relations.length) {
			return Math.min(...relations)
		}
	}
	return 0
}
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))