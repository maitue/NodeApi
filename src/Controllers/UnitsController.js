const {create_unit} = require('../Models/UnitsModels')

module.exports = {
    createUnit : function (req,res,next) {
        res.send(create_unit(req.body));
    }
}
