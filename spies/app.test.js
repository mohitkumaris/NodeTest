
const expect=require('expect');
const rewire=require('rewire');

/*
Works as require to call methods
 */
var app=rewire('./app');

describe('App',()=>{

    var db={
        saveuser:expect.createSpy()
    };

    app.__set__('db',db);

    it('should check save user too',()=>{

        var email='mohit@gmail.com';
        var password='wettypas';

        app.handleSignup(email,password);

        expect(db.saveuser).toHaveBeenCalledWith({email,password});

    });

});