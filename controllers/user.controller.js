const Service = require('../services/user.service')
// validate module

const methods = {
  async Register(req, res){
    try {
      let result = await Service.create(req.body)
      return res.success(result, 200);
    } catch (error) {
      return res.error(error.message, error.status)
    }
  },


} 

module.exports = { ...methods }