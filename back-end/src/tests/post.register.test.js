const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/api/app');
const jwt = require('jsonwebtoken');
const { users } = require('../../src/database/models')

const {
  createUser,
  returnRegister,
  returnToken,
  newUser,
} = require('../../src/tests/mocks/user.mock');

chai.use(chaiHttp);

let chaiRequest = chai.request;

const { expect } = chai;

describe('Testa Resposta correta para a Rota /Register', () => {
    let okResponse;
    before(async () => {
      sinon
       .stub(users, 'findOne')
       .returns(false);
      sinon
        .stub(users, 'create')
        .resolves(createUser);
      sinon
        .stub(jwt, 'sign')
        .returns(returnToken);   
    });
    after(() => {
      users.findOne.restore();
      users.create.restore();
      jwt.sign.restore();
    })
  
    it('Verifica registro de um usuário', async () => {
      okResponse = await chaiRequest(app)
      .post('users/register')
      .send(newUser);
      console.log('TESTE ----->', okResponse);
       const { body: { name, email, role, id, token } } = okResponse;
  
      expect(okResponse.body).to.be.an('object');
      expect(okResponse).to.have.status(201);
      expect(okResponse.body).to.haveProperty('token');
      expect(OkResponse.body).to.have.property('role');
      expect(id).to.be.equal(returnRegister.id);
      expect(name).to.be.equal(returnRegister.name);
      expect(role).to.be.equal(returnRegister.role);
      expect(email).to.be.equal(returnRegister.email);
      expect(token).to.be.equal(returnRegister.token);
    });
  });
  