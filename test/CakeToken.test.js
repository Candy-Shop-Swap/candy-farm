const { assert } = require("chai");

const CandyToken = artifacts.require('CandyToken');

contract('CandyToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.candy = await CandyToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.candy.mint(alice, 1000, { from: minter });
        assert.equal((await this.candy.balanceOf(alice)).toString(), '1000');
    })
});
