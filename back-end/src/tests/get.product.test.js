const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/api/app');
const { products } = require('../../src/database/models')

const {
  allProducts,
} = require('../../src/tests/mocks/product.mock');

chai.use(chaiHttp);

let chaiRequest = chai.request;

const { expect } = chai;


describe('Testa Resposta correta para a Rota /products', () => {
  let OkResponse;

  before(async () => {
    sinon
    .stub(products, 'findAll')
    .returns(allProducts);
  });
  after(() => {
    products.findAll.restore();
  })

  it('Verifica se é possível listar todos os produtos', async () => {
    OkResponse = await chaiRequest(app)
    .get('/products')

    const { body } = OkResponse;
    const lengthBody = body.length;

    expect(body).to.be.an('array');
    expect(OkResponse).to.have.status(200);
    expect(body).to.be.lengthOf(lengthBody);
    for (let index = 0; index < lengthBody; index +=1 ) {
      expect(body[index]).to.have.property('id');
      expect(body[index]).to.have.property('name');
      expect(body[index]).to.have.property('price');
      expect(body[index]).to.have.property('url_image');
    }
  });
});