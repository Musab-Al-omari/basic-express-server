'use strict';

const server = require('../src/server.js')
const superTest = require('supertest')
const serverRequest = superTest(server.app)


describe('validate Server', () => {
    it('500 if no name in the query string', async () => {
        let response = await serverRequest.get('/person');

        expect(response.status).toEqual(500);

    });

    it('200 if the name is in the query string', async () => {
        let response = await serverRequest.get('/person?name=musab');

        expect(response.status).toEqual(200);


    })
})