var escapeChars = ['\\', '\''];

_.mixin({

	toBash: function (object, prefix) {

		var prefix = ''+(prefix || ''),
			definitions = [],
			keys = _.keys(object);
		for (var i = 0, li = keys.length, k, v; i < li; i++) {

			k = keys[i], v = object[k];

			if (v === true || v === false) v = parseInt(v);
			else if (typeof v === 'number' || typeof v === 'string') {
			
				v = ''+v;
				escapeChars.forEach(function (char) {
				
					v = v.replace(char, '\\'.char);
				});
				v = '$\''+v+'\'';
			}
			else continue;
			
			
			definitions.push(prefix+k+'='+v);
		}

		return definitions.join('\n');
	}
});