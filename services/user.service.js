const { findOne } = require('../models/User');
const User = require('../models/User'),
      config = require('../configs/app'),
      jwt = require('jsonwebtoken');


const methods = {
    async create(req){
      try {
        const response = new User(req)
        await response.save()
        return response;
      } 
      catch (error) {
        return error;
      }
  },
  async fineByUsername(username){
    try {
      let response = await User.findOne({username : username})
      return response;
    } 
    catch (error) {
      return error;
    }
  },
  async findAll(filter){
    try {
      let query = filter ? filter : null;
      let response = await User.find(query);
      return response;
    } catch (error) {
      return error;
    }
  }
  
} 

module.exports = { ...methods }