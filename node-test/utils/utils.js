const add=(a,b)=>a+b;
const square=(x)=>x*x;
let setName=(user,fullname)=>{

    let name=fullname.split(' ');
    user.FirstName=name[0];
    user.LastName=name[1];
   return user;
};

let addAsync=(a,b,callback)=>{

    setTimeout(()=>{

        callback(a+b);

    },1000)

};

var squareAsync=(a,callback)=>{

    setTimeout(()=>{

        callback(a*a);

    },1000)

}

module.exports={

    add,
    square,
    setName,
    addAsync,
    squareAsync
};
