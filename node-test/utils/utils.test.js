
const util=require('./utils');

// mocha behaves on BDD (Behaviour driven Development)
it('should add two numbers',()=>{

    let res=util.add(22,4);

    if(res != 26){

        throw new Error(`Added numbers should be 26 but its ${res}`);
    }
});

it('should be square of two numbers',()=>{

    let sq=util.square(5);

    if(sq != 25){

        throw new Error(`Square should be 25 but its ${sq}`);
    }
});