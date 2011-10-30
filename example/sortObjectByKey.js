var _ = require('underscorex')

var object = {
	'orange juice': {
		color: 'yellow',
		caffeine: false	
	},
	water: {
		color: 'transparent',
		caffeine: false	
	},
	coffee: {
		color: 'brown',
		caffeine: true
	}
}

_.log('Original object:')
_.log(object)

var list = _.objectToArray(object)

list.sort(function (el1, el2) {
	return el1[0] < el2[0] ? -1 : 1
})

_.log()
_.log('And now the object is ordered by key:')
_.log(_.arrayToObject(list))