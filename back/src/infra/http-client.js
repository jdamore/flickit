import http from 'http';
import request from 'request';


export default class HttpClient {

	constructor(url, headers) {
    this.get   	= this._get.bind(this);
    this.options = {
  			url: url,
  			headers: headers
		};
  }
	
	_get(resource, callback) {
		let resourceOptions = {
			url: this.options.url+resource,
			headers: this.options.headers
		}
		request(resourceOptions, function (error, response, jsonResponse) {
    	if (error) return callback(null, null, error);
    	callback(response.statusCode, JSON.parse(jsonResponse), null);
    });

	}

}