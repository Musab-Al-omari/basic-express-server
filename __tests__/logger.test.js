'use strict';

const server = require('../src/server.js')
const superTest = require('supertest')
const serverRequest = superTest(server.app)


describe('Testing Server', () => {

    it('404 on a bad route', async () => {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });


    it('404 on a bad method', async () => {
        let response = await serverRequest.post('/not-found-route');
        expect(response.status).toEqual(404);
    })


})