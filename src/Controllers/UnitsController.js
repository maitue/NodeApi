const {create_unit} = require('../Models/UnitsModels')

module.exports = {
    createUnit : function (req,res,next) {
        create_unit(req.body);
        res.send("create succes")
    }
}
