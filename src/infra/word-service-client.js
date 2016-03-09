import HttpClient from './http-client';


export default class WordServiceClient {

	constructor(url) {
		this.httpClient = new HttpClient(url, { "Accept": "application/json" });
    this.word  = this._word.bind(this);
  }
	
	_word(callback) {
		this.httpClient.get('/word', function(httpStatus, word, error) {
			if(error || httpStatus != 200) {
				callback(null, httpStatus);
			}
    	else {
    		callback(word, httpStatus);
    	}
    });
	}

}