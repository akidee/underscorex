// Remove native functions to demonstrate that the fallbacks work
delete
	Function.prototype.bind,
	Array.prototype.indexOf,
	Array.prototype.lastIndexOf,
	Array.prototype.every,
	Array.prototype.some,
	Array.prototype.forEach,
	Array.prototype.map,
	Array.prototype.filter,
	Array.prototype.reduce,
	Array.prototype.reduceRight;

// delete Object.keys;




var _ = require('../');
var a = require('assert');




// _.extendDeep

p = {d: {e: 1}};
q = {d: {e: 2, f: 3}};

a.deepEqual(
	_.keys(_.extendDeep(p, q).d),
	['e', 'f']
);

a.strictEqual(
	p.d.e,
	2
);

p = {d: {e: 1}};

a.strictEqual(
	_.extendDeep(p, q, true).d.e,
	1
);

p = {};
q = {d: {e: 2, f: 3}};

a.deepEqual(
	_.extendDeep(p, q).d.f,
	3
);




// _.objectToArray (Numerical keys are omitted! Strictly, this test could fail.)

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

a.deepEqual(
	_.arrayToObject([
		[ 'a', 1 ],
		[ '_ok', true ],
		[ 'b', [ 1, 2, 3 ] ],
		[ 'c', {
			a: b
		} ]
	]),
	{
		a: 1,
		_ok: true,
		b: [ 1, 2, 3 ],
		c: {
			a: b
		}
	}
)




// _.simple

a.strictEqual(
	_.simple("\tA  b\n "),
	'a b'
);

a.strictEqual(
	_.simple("\tA  b\n ", true),
	'A b'
);




// _.escapeXml

var str = '<>\n<>""\'\'\n';
a.strictEqual(
	_.escapeXml(str),
	'&lt;&gt;\n&lt;&gt;&quot;&quot;&#039;&#039;\n'
);
a.strictEqual(
	_.escapeXml(str, true),
	'&lt;&gt;<br/>&lt;&gt;&quot;&quot;&#039;&#039;<br/>'
);




// Object.keys

a.deepEqual(
	Object.keys({a:1,b:2})
	['a', 'b']
);




// Function.prototype.bind

var b = {},
	c = ( function(a){ return [this, a]; } ).bind(b, 2)();
	
a.strictEqual(
	c[0],
	b
);

a.strictEqual(
	c[1],
	2
);




// Array.prototype.indexOf ...

a.strictEqual(
	[1, 2].indexOf(2),
	1
);




// _.log

_.log('Passed');
