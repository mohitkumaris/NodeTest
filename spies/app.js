
const db=require('./db');

var handleSignup=(email,password)=>{

  db.saveuser({
      email,password
  });

};

module.exports={

    handleSignup
};