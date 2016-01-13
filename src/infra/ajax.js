class Ajax {
	
	constructor(url) {
		this.url = url;
    	this.get = this._get.bind(this);
	}

	_get(success, error) {
    	let xhr = new XMLHttpRequest();
		xhr.open('GET', this.url);
		xhr.send(null);
		this.xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
  				if (xhr.status === 200) {
  				 	success();
  				} else {
  				 	error(xhr.status); 
  				}
  			}
		}
	}
}

module.exports = Ajax;