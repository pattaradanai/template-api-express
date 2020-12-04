const Service = require('../services/user.service')
jwt = require('jsonwebtoken')
passport = require('passport')
// validate module

const methods = {
  async register(req, res){
    try {
      let result = await Service.create(req.body)
      return res.success(result, 200);
    } catch (error) {
      return res.error(error.message, error.status)
    }
  },
  async login(req,res){
    try {
      let {username , password} = req.body;
      let response = await Service.fineByUsername(username);
        
        if(!response) {
          return res.error('username not found', error.status)
        }
        if(!response.validPassword(password)) {
          return res.error('password is invalid', error.status)
        }
        
        return res.success({accessToken: response.generateJWT(response),responseData: response}, 200);
    } catch (error) {

      return res.error(error.message, error.status)
    }
  }
 


} 

module.exports = { ...methods }