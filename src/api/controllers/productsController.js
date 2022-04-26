const productsService = require('../services/productsService')

const getAllProducts = async (req, res) => {

    const result = productsService.getAllProducts()

    // Send data
    res.send({
        "status": 'success',
        "result": result
    });

}

module.exports = {
    getAllProducts
}