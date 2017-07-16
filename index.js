Object.values =  function(obj) {
    // if ES6 is supported
    if (Object.keys) {
        return Object.keys(object).map(function (key) {
	        return object[key];
	    });
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
    
    if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.values called on non-object');
 
    var result = [];
 
    for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(obj[prop]);
    }
 
    if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) result.push(obj[dontEnums[i]]);
        }
    }
    return result;
};
