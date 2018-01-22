const expect=require('expect');
const util=require('./utils');

describe('Utils',()=>{

    describe('#Add',()=>{
        // mocha behaves on BDD (Behaviour driven Development)
        it('should add two numbers',()=>{

            let res=util.add(22,4);

            expect(res).toBe(26).toBeA('number');
        });
    });


    it('should be square of two numbers',()=>{

        let sq=util.square(5);

        expect(sq).toBe(25).toBeA('number');
    });

    it('first name and last name should be there',()=>{

        var user={ FirstName:'Mohit',
            LastName:'Kumar'};
        let names=util.setName(user,'Mohit Kumar');

        expect(names).toInclude({
            FirstName:'Mohit',
            LastName:'Kumar'
        })

    });

    /*
    For Async we should always use done as Mocha
    dont run if test case takes more than 2 seconds
    and as it is async the callback of it runs
    before the result is executed in callback.
     */
    it('Numbers will be added in Async',(done)=>{

        util.addAsync(4,10,(sum)=>{

            expect(sum).toBe(14).toBeA('number');
            done();
        });

    });

    it('Numbers will be squared in Async',(done)=>{

        util.squareAsync(4,(square)=>{

            expect(square).toBe(16).toBeA('number');
            done();
        });

    });
});


it('should expect some values',()=>{

    expect(12).toNotBe(11);
    expect({name:'mohit'}).toEqual({name:'mohit'});
    expect([2,3,4]).toExclude(5);

});