'use strict';

class Ajax {
	
	constructor(url) {
		this.url = url;
    	this.get = this._get.bind(this);
    	this.xhr = new XMLHttpRequest();
    	this.setXmlHttpRequest = this._XmlHttpRequest.bind(this);
	}

	_get(success, error) {
		this.xhr.open('GET', this.url);
		this.xhr.send(null);
		this.xhr.onreadystatechange = function() {
			if (this.xhr.readyState === 4) {
  				if (this.xhr.status === 200) {
  				 	success();
  				} else {
  				 	error(this.xhr.status); 
  				}
  			}
		}
	}

	_XmlHttpRequest(xhr) {
		this.xhr = xhr;
	}
}

/* Another problem with bable-jest, does not seem to work with export default */
module.exports = Ajax;