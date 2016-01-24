'use strict';

export class Stream {

	constructor() {
    this.add       	 = this._add.bind(this);
    this.subscribe   = this._subscribe.bind(this);
    this.events			 = [];
    this.subscribers = [];
  }
	
	_add(event) {
		this.events.push(event);
		this.subscribers.forEach(function (item, index, array) {
  		item.call(null, event);
		});
	}
	
	_subscribe(subscriber) {
		this.subscribers.push(subscriber);
	}

}

let stream = null;

export default function() {
	if(stream===null) {
		stream = new Stream();
	}
	return stream;
}
