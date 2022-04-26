const { getAllProducts } = require('../services/productsService')
const chai = require('chai');

describe('Products', () => {

    // Test the /GET products
    describe('/GET products', () => {
        it('it should GET all the products',  (done) => {
            chai.expect(getAllProducts()).to.equal(0)
            done()
        });
    });

})
