const request=require('supertest');
const expect=require('expect');

var app=require('./server').app;

describe('Server test',()=>{


    it('should send back Hello world',(done)=>{

        request(app)
            .get('/')
            .expect(200)
            .expect((res)=>{

                expect(res.body).toInclude({

                    message:'hello world'
                })
            })
            .end(done);
    });
});
