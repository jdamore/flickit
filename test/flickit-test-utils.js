'use strict';

var FlickitTestUtils = {

	getAllFunctions: function(obj) {
		var methods = [];
		for (var m in obj) {        
	    	if (typeof obj[m] == "function") {
	        	methods.push(m);
	    	}
	    }
	    return methods.sort();
	},
	
	getAllProperties: function(obj) {
		var properties = [];
		for (var p in obj) {        
	    	if (typeof obj[p] !== "function") {
	        	properties.push(p);
	    	}
	    }
	    return properties.sort();
	}

};

module.exports = FlickitTestUtils;