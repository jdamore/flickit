'use strict';

let Utils = {

	type(obj) {
    	//return Object.prototype.toString.call(obj).slice(8, -1);
    	return typeof(obj);
	},

	functions(obj) {
		var methods = [];
		for (var m in obj) {        
	    	if (typeof obj[m] == "function") {
	        	methods.push(m);
	    	}
	    }
	    return methods.sort();
	},
	
	properties(obj) {
		var properties = [];
		for (var p in obj) {        
	    	if (typeof obj[p] !== "function") {
	        	properties.push(p+"="+obj[p]);
	    	}
	    }
	    return properties.sort();
	}
};

export default Utils;