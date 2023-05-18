describe('input test', () => {
    it('in: 0', () => {
        let act = isGoodInput(0);
        expect(true).toBe(act);
    });
    it('in: "a"', () => {
        let act = isGoodInput("a");
        expect(false).toBe(act);
    });
    it('in: "11a"', () => {
        let act = isGoodInput("11a");
        expect(false).toBe(act);
    });
    it('in: 100', () => {
        let act = isGoodInput(100);
        expect(true).toBe(act);
    });
});