'use strict';

const server = require('../src/server.js')
const superTest = require('supertest')
const serverRequest = superTest(server.app)


describe('Testing Server', () => {

  it('given an name in the query string, the output object is correct', async() => {
    let response = await serverRequest.get('/person?name=musab')
    expect(response.body).toEqual({ name: 'musab' });
  })
})