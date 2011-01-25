var _ = require('../');
require('../object')(_);
var a = require('assert');




// _.objectId()

var p = {};

_.objectId(p);

a.strictEqual(
	p.__id,
	0
);

a.strictEqual(
	_.objectId(p),
	0
);

var q = {};

a.strictEqual(
	_.objectId(q),
	1
);



	
// _.resetRefs()

var o = {c:1};

_.resetRefs(o);

a.deepEqual(
	o.$refs,
	[]
);

p = [];

_.resetRefs(p);

a.deepEqual(
	p[p.length - 1],
	{$$refs:[]}
);




// _.getRefs()

a.deepEqual(
	_.getRefs(o),
	[]	
);

a.deepEqual(
	_.getRefs(p),
	[]	
);




// _.addRef()

a.deepEqual(
	_.addRef(o, ['a'], ['#']),
	[['a'], ['#']]
);

a.deepEqual(
	_.addRef(p, ['a'], ['#']),
	[['a'], ['#']]	
);

global.xy = true;

_.addRef(o, ['b'], ['xy']);
_.addRef(p, ['b'], ['xy']);




// _.findRefs()

var q = {};
q.a = q;
q.b = q;

_.findRefs(q);

a.strictEqual(
	q.__id,
	2
);

a.deepEqual(
	q.$refs,
	[
		['a'], ['#'],
		['b'], ['#']
	]
);

_.findRefs(q);

a.strictEqual(
	q.__id,
	2
);

a.deepEqual(
	q.$refs,
	[
		['a'], ['#'],
		['b'], ['#']
	]
);




// _.resolveRefs()

_.resolveRefs(o);

a.deepEqual(
	o.a,
	o
);

a.deepEqual(
	o.b,
	undefined
);

a.deepEqual(
	_.getRefs(o),
	[['b'], ['xy']]
);

_.resolveRefs(o, true);

a.deepEqual(
	o.a,
	o
);

a.deepEqual(
	o.b,
	true
);

a.deepEqual(
	_.getRefs(o),
	[]
);




_.log('Passed');
