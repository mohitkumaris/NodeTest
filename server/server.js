const express=require('express');

var app=express();

app.use((req,res,next)=>{

    next();
});

app.get('/',(req,res)=>{
res.send({

    message:'hello world'
});
});

const port=process.env.port || 3000;
app.listen(port,()=>{

    console.log('Server is running.');
});

module.exports={
    app
}