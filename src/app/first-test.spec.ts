describe('First Test', () => {
    let testVariable: any;

    //lifecycle method
    beforeEach(() => {
        testVariable = {};
    })
    it('Should return true if a is true', () => {
        //arrange
        testVariable.a = false;

        //act
        testVariable.a = true;

        //assertion
        expect(testVariable.a).toBe(true);
    })
})