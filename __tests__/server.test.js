'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const mockServer = supertest(server);
const { sequelize } = require('../src/auth/models');

const user1 = { username: 'sora', password: 'keyblade' };

beforeAll(async (done) => {
  await sequelize.sync();
  done();
});
afterAll(async (done) => {
  await sequelize.drop();
  done();
});

// describe('test the server routes and db')