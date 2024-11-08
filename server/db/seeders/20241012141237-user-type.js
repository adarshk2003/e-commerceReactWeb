'use strict';
const bcrypt=require('bcrypt');

module.exports = {
  up: (models, mongoose) => {

    let password="admin123";
    let salt=bcrypt.genSaltSync(10);
    let hashed_pass=bcrypt.hashSync(password,salt);

    
      return models.users.insertMany([
        {
          name:"admin",
          email:"admin@gmail.com",
          password:hashed_pass,
          
          user_type:"672da5c1195b6edc083b2f7c"
        }
      ]).then(res => {
    
      console.log(res.insertedCount);
    });
    
  },

  down: (models, mongoose) => {
   
      return models.users.deleteMany(
      {
          _id:"672da5c1195b6edc083b2f7c"   
      }
      ).then(res => {
      
      console.log(res.deletedCount);
      });
    
  }
};