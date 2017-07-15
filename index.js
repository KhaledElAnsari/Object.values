Object.values = Object.values ? Object.values : function(obj) {
    var objType = Object.prototype.toString.call(obj);
    if(objType === "[object Array]" || objType === "[object Object]") {
        var valuesArray = [];
        for(var key in obj) {
            valuesArray.push(obj[key]);
        }
        
        return objType === "[object Array]" ? valuesArray : valuesArray.sort(function(a, b) {return a-b;});
    }
    else {
        if(obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else {
            return [];
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Object.entries;
}