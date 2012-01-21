'<srv'
var a = require('assert')
'srv>'
/*<cli
var a = require('clientassert')
a.onError(function (e) {

	document.getElementById('error').innerHTML = JSON.stringify(e) + JSON.stringify(e.stack);
})
cli>*/




var root = typeof window === 'object'
	? window
	: (
		typeof global === 'object'
			? global
			: {}
	)

root.__UNDERSCOREX_TEST = true

var _ = require('../index')




var slice = Array.prototype.slice




// JSON

a.strictEqual(
	typeof JSON,
	'object'
)




// Function.prototype.bind

var b = {},
	c = ( function(a){ return [this, a]; } ).bind(b, 2)()
	
a.strictEqual(
	c[0],
	b
)

a.strictEqual(
	c[1],
	2
)




// Array.prototype.every

var ar = [1, 2, 3, 4],
	it = function (v, i, a) { return i > 0 && this.a },
	ct = { a: 1 }
	
a.strictEqual(
	ar.every(it, ct),
	_.every(ar, it, ct)
)

a.strictEqual(
	ar.every(it, null),
	_.every(ar, it, null)
)




// Array.prototype.some

var ar = [1, 2, 3, 4],
	it = function (v, i, a) { return i > 3 && this.a },
	ct = { a: 1 }
	
a.strictEqual(
	ar.some(it, ct),
	_.some(ar, it, ct)
)

a.strictEqual(
	ar.some(it, null),
	_.some(ar, it, null)
)




// Array.prototype.forEach

var ar = [1, 2, 3, 4],
	ar2 = [].concat(ar),
	it = function (v, i, a) { a[i] = v * i + this.a },
	ct = { a: 1 }

ar.forEach(it, ct)
_.forEach(ar2, it, ct)
	
a.deepEqual(
	ar,
	ar2
)




// Array.prototype.map

var ar = [1, 2, 3, 4],
	it = function (v, i, a) { return v * i + this.a },
	ct = { a: 1 }

a.deepEqual(
	ar.map(it, ct),
	_.map(ar, it, ct)
)




// Array.prototype.filter

var ar = [1, 2, 3, 4],
	it = function (v, i, a) { return this.a && i > 1 },
	ct = { a: 1 }
	
a.deepEqual(
	ar.filter(it, ct),
	_.filter(ar, it, ct)
)




// Array.prototype.reduce

var ar = [1, 2, 3, 4],
	it = function (p, c, i, a) { return p + c * i + a.length },
	init = 0
	
a.deepEqual(
	ar.reduce(it, init),
	_.reduce(ar, it, init)
)




// Array.prototype.reduceRight

var ar = [1, 2, 3, 4],
	it = function (p, c, i, a) { return p + c * i + a.length },
	init = 0
	
a.deepEqual(
	ar.reduceRight(it, init),
	_.reduceRight(ar, it, init)
)




// _.log

	// does not throw

_.log('log', 'without', 'console.log', { 'being': 'defined' })




// _.isRecursable

	// simple types

a.strictEqual(
	_.isRecursable(true),
	false
)

a.strictEqual(
	_.isRecursable(1),
	false
)

a.strictEqual(
	_.isRecursable('string'),
	false
)

a.strictEqual(
	_.isRecursable(null),
	false
)

a.strictEqual(
	_.isRecursable(undefined),
	false
)

	// non recursable objects

a.strictEqual(
	_.isRecursable([]),
	false
)

a.strictEqual(
	_.isRecursable(function () {}),
	false
)

a.strictEqual(
	_.isRecursable(new Date),
	false
)

a.strictEqual(
	_.isRecursable(/.*/),
	false
)

	// recursable objects

a.strictEqual(
	_.isRecursable({}),
	true
)

var constr = function () {}

a.strictEqual(
	_.isRecursable(new constr),
	true
)




// _.extend

constr = function () {}
constr.prototype.a = 5

	// __proto__.a of last argument is ignored

a.deepEqual(
	_.extend({ a: 1, b: 2 }, { a: undefined, c: 3 }, { d: 4 }, new constr),
	{ a: undefined, b: 2, c: 3, d: 4 }
)




// _.extendDeep

var d = new Date
d.f = 0
var p = {a: 10, d: { e: 1 }, e: d},
	q = {d: { e: 2, f: 3 }, e: { f: 1 }}
constr = function () {}
constr.prototype.a = 5
var r = new constr
r.a = 2

	// preserve = false

a.deepEqual(
	_.extendDeep({}, p, q, r),
	{ a: 2, d: { e: 2, f: 3 }, e: { f: 1 } }
)

	// preserve = true

a.deepEqual(
	_.extendDeep({}, p, q, r, true),
	{ a: 10, d: { e: 1, f: 3 }, e: d }
)




// _.objectToArray

	// Numerical keys are omitted! Strictly, this test could fail.

a.deepEqual(
	_.objectToArray({
		a: 1,
		_ok: true,
		b: [ 1, 2, 3 ],
		c: {
			a: b
		}
	}),
	[
		[ 'a', 1 ],
		[ '_ok', true ],
		[ 'b', [ 1, 2, 3 ] ],
		[ 'c', {
			a: b
		} ]
	]
)




// _.arrayToObject

	// Numerical keys are omitted! Strictly, this test could fail.

var array = [
	[ 'a', 1 ],
	[ '_ok', true ],
	[ 'b', [ 1, 2, 3 ] ],
	[ 'c', {
		a: b
	} ]
]
var result = _.arrayToObject(array),
	nextProp
for (var k in result) {

	nextProp = array.shift()
	a.strictEqual(nextProp[0], k)
}




// _.escapeXml

var str = '<>\n<>""\'\'\n'

	// newline = false

a.strictEqual(
	_.escapeXml(str),
	'&lt;&gt;\n&lt;&gt;&quot;&quot;&#039;&#039;\n'
)

	// newline = true

a.strictEqual(
	_.escapeXml(str, true),
	'&lt;&gt;<br/>&lt;&gt;&quot;&quot;&#039;&#039;<br/>'
)




// _.simple

	// preserveCase = false

a.strictEqual(
	_.simple("\tA  b\n "),
	'a b'
)

	// preserveCase = true

a.strictEqual(
	_.simple("\tA  b\n ", true),
	'A b'
)




// _.escapeForRegExp

a.strictEqual(
	_.escapeForRegExp('.$?*|{}()[]\\/+^abc012'),
	'\\.\\$\\?\\*\\|\\{\\}\\(\\)\\[\\]\\\\\\/\\+\\^abc012'
)




// _.locale

	// no object

a.strictEqual(
	_.locale(1),
	1
)

	// existing locale, given
	
a.strictEqual(
	_.locale({ de_DE: 'Musik', 'en': 'music' }, 'de_DE'),
	'Musik'
)

	// existing locale, not given, default
	
a.strictEqual(
	_.locale({ de_DE: 'Musik', 'en': 'music' }),
	'music'
)

	// locale given that is not of an order that is high enough
	
a.strictEqual(
	_.locale({ de_DE: 'Musik', 'en': 'music' }, 'de'),
	'music'
)

	// higher order locale given, lower order locale is found
	
a.strictEqual(
	_.locale({ de_DE: 'Musik', 'en': 'music' }, 'de_DE_BY'),
	'Musik'
)




_.log('Passed')
/*<cli
document.body.style.backgroundColor = 'green'
document.body.innerHTML = 'Passed'
cli>*/
