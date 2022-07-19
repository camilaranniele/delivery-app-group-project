const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/api/app');
const jwt = require('jsonwebtoken');
const { users } = require('../../src/database/models')

const {
  loginUser,
  createUser,
  returnRegister,
  returnToken,
} = require('../../src/tests/mocks/user.mock');

const userNotFound = '"user" not found';
chai.use(chaiHttp);

let chaiRequest = chai.request;

const { expect } = chai;

describe('Testa Resposta correta para a Rota users/login', () => {
  let OkResponse;

  before(async () => {
    sinon
      .stub(users, 'findOne')
      .returns(createUser);
    sinon
      .stub(jwt, 'sign')
      .returns(returnToken); 
  });
  after(() => {
    users.findOne.restore();
    jwt.sign.restore();
  })

  it('Verifica login de um usuário', async () => {
    OkResponse = await chaiRequest(app)
    .post('/users/login')
    .send(loginUser);
    const { body: { name, email, role, token }} = OkResponse;

    expect(OkResponse.body).to.be.an('object');
    expect(OkResponse).to.have.status(200);
    expect(OkResponse.body).to.have.property('token');
    expect(OkResponse.body).to.have.property('role');
    expect(name).to.be.equal(returnRegister.name);
    expect(role).to.be.equal(returnRegister.role);
    expect(email).to.be.equal(returnRegister.email);
    expect(token).to.be.equal(returnRegister.token);
   
  });
});