'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      
      return models.user_types.insertMany([
        {
          _id:"672da5c1195b6edc083b2f7c",
         user_type:"admin"
        },
        {
          _id:"672da5d4195b6edc083b2f7d",
         user_type:"Buyer"
        },
        {
          _id:"672da5e9195b6edc083b2f7e",
          user_type:"Seller"
        }
      ]).then(res => {
     
      console.log(res.insertedCount);
    });
    
  },

  down: (models, mongoose) => {
    
      return models.user_types.deleteMany(
        {
         _id:{
          $in:[
            '672da5c1195b6edc083b2f7c',
            '672da5d4195b6edc083b2f7d',
            '672da5e9195b6edc083b2f7e'
          ]
         }
        }
      ).then(res => {
     
      console.log(res.deletedCount);
      });
    
  }
};
