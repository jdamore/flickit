'use strict';

import randomstring from 'randomstring';
import { expect } from 'chai';
import Pact from 'pact-consumer-js-dsl';
import WordServiceClient from './../src/infra/word-service-client'

describe('Word Service Client Contract', () => {

  let mockWordService, wordServiceClient;

  before(function() {

  	mockWordService = Pact.mockService({
  		consumer: 'flickit',
  		provider: 'word-service',
  		port: 1234,
      done: function(error) {
        expect(error).to.be.null
      }
		});

   	wordServiceClient = new WordServiceClient('http://localhost:1234');

  });

  describe('Request a randomw word', () => {

  	let randomString, randomWord;
  	let responseCode, responseWord;

    before(function(done) { 

      randomString = randomstring.generate({length: 12, charset: 'alphabetic'});

      randomWord = {
        word: Pact.Match.term({matcher: "\\w+", generate: randomString}),
        score: 12
      };

      mockWordService
      .given('the service is up and running')
      .uponReceiving('a request for a random word')
      .withRequest('get', '/word', { "Accept": "application/json" })
      .willRespondWith(
        200, 
        { "Content-Type": "application/json" }, 
        randomWord
      );

      mockWordService.run(done, function(runComplete) {
        wordServiceClient.word(function(word, httpStatus){
        	responseCode = httpStatus;
        	responseWord = word;
        	runComplete();
        });
      });
    });

    it('returns a word', () => {
    	expect(responseWord.word).to.equal(randomString);
    });

  });

});