const { findOne } = require('../models/User');
const User = require('../models/User'),
      config = require('../configs/app'),
      jwt = require('jsonwebtoken');


const methods = {
    async create(req){
      try {
        console.log(req);
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
  // scopeSearch(req) {
  //   $or = []
  //   if(req.query.username) $or.push({ username: { $regex: req.query.username } })
  //   if(req.query.email) $or.push({ email: { $regex: req.query.email } })
  //   if(req.query.age) $or.push({ age: +req.query.age })
  //   let query = $or.length > 0 ? { $or } : {}
  //   let sort = { createdAt: -1 }
  //   if(req.query.orderByField && req.query.orderBy)
  //     sort = { [req.query.orderByField]: req.query.orderBy.toLowerCase() == 'desc' ? -1 : 1 }
  //   return { query: query, sort: sort }
  // },

  // find(req) {
  //   let limit   = +(req.query.size || config.pageLimit);
  //   let offset  = +(limit*((req.query.page || 1) -1));
  //   let _q   = methods.scopeSearch(req)
    
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       Promise.all([
  //         User.find(_q.query).sort(_q.sort).limit(limit).skip(offset),
  //         User.countDocuments(_q.query)
  //       ]).then((result)=>{
  //         let rows = result[0]
  //         let count = result[1]
  //         resolve({
  //           rows: rows,
  //           total: count,
  //           lastPage: Math.ceil(count/limit),
  //           currPage: +req.query.page || 1
  //         })
  //       }).catch((error)=>{
  //         reject(error)
  //       })
  //     } catch (error) {
  //       reject(error)
  //     }
  //   });
  // },

  // findById(id) { 
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let obj = await User.findById(id)
  //       if(!obj) reject(methods.error('Data Not Found', 404))
  //       resolve(obj.toJSON())
  //     } catch (error) {
  //       reject(error)
  //     }
  //   });
  // },

  // insert(data) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const obj = new User(data)
  //       let inserted = await obj.save()
  //       resolve(inserted)
  //     } catch (error) {
  //       reject(methods.error(error.message, 400))
  //     }
  //   });
  // },

  // update(id, data) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let obj = await User.findById(id)
  //       if(!obj) reject(methods.error('Data Not Found', 404))
  //       await User.updateOne({_id: id}, data)
  //       resolve()
  //     } catch (error) {
  //       reject(error)
  //     }
  //   });
  // },

  // delete(id) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let obj = await User.findById(id)
  //       if(!obj) reject(methods.error('Data Not Found', 404))
  //       await User.deleteOne({_id: id})
  //       resolve()
  //     } catch (error) {
  //       reject(error)
  //     }
  //   });
  // },

  // login(data) {
  //   return new Promise(async (resolve, reject)=>{
  //     try {
  //       let obj = await User.findOne({username: data.username});
  //       if(!obj) {
  //         reject(methods.error('username not found', 401))
  //       }
        
  //       if(!obj.validPassword(data.password)) {
  //         reject(methods.error('password is invalid.', 401))
  //       }
        
  //       resolve({accessToken: obj.generateJWT(obj),userData: obj})
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

} 

module.exports = { ...methods }