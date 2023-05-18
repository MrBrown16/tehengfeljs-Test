describe('Calc Test in: radius, height', () => {
    it('in: 100, 20', () => {
        let act = calcSurface(100, 20);
        expect(act).toBeCloseTo(75398.22, 0.002);
    });
    it('in: 1, 200', () => {
        let act = calcSurface(1, 200);
        expect(act).toBeCloseTo(1262.92, 0.002);
    });
    it('in: 0, 2', () => {
        let act = calcSurface(0, 2);
        expect(act).toBe(0);
    });
    //vulnerability always needs inputcheck before
    it('in: -1, 20', () => {
        let act = calcSurface(-1, 20);
        expect(act).toBeCloseTo(-119.39, 0.002);
    });
});