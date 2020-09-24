import { assert } from 'chai';
import { Robot } from '../src/app/model/robot';

describe('Robot', () => {
    it('do nothing for the first price', () => {
        //arrange
        const rb = new Robot();
        //act
        const r = rb.process(800);
        //assert
        assert.equal(r, '')
    });

    //2 ซื้อ
    it('Buy when price goes up for 2 point', () => {
        //arrange
        const rb = new Robot();
        //act
        const r1 = rb.process(800)
        const r2 = rb.process(802)
        const r3 = rb.process(804)
        const r4 = rb.process(805)

        assert.equal(r1, '')
        assert.equal(r2, 'LF @802.0 x 1')
        assert.equal(r3, 'LF @804.0 x 1')
        assert.equal(r4, '')
    });

    //u trun
    it('u-trun from up to down', () => {
        const rb = new Robot();

        rb.process(800)
        rb.process(802)//b
        rb.process(804)//b
        rb.process(805)

        const r5 = rb.process(801)
        const r6 = rb.process(800)
        const r7 = rb.process(799)//s
        const r8 = rb.process(798)
        const r9 = rb.process(797)
        const r10 = rb.process(795)
        const r11 = rb.process(800)
        const r12 = rb.process(802)

        assert.equal(r5, '')
        assert.equal(r6, '')
        assert.equal(r7, 'SF @799.0 x 1')
        assert.equal(r8, '')
        assert.equal(r10, 'SF @795.0 x 1')
        assert.equal(r11, 'LF @800.0 x 1')
        assert.equal(r12, 'LF @802.0 x 1')
    })
});
