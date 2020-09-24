import { assert } from "chai";

describe('Sample test case',() =>{
    it('should substring correctly',()=>{
        //arrange
        let s = 'Hello';
        //act
        let r = s.substring(3);
        //assert
        //expect(r).toEqual('lo')
        assert.equal(r,'lo')
    })
})