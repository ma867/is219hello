const Calculator = require('../Calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Calc = new Calculator();
    expect(Calc.divide(2, 2)).toBe(1);
    expect(Calc.result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Calc = new Calculator();
    expect(Calc.add(2, 2)).toBe(4);
    expect(Calc.result).toBe(4);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.multiply(2, 2)).toBe(4);
    expect(Calc.result).toBe(4);

});

test('Calculator subtract 2 by 2 and  get 0 as a result',() =>{
    let Calc = new Calculator();
    expect(Calc.subtract(2,2)).toBe(0);
    expect(Calc.result).toBe(0);
});

test('Calculator squares 3 and get 9 as a result',()=>{
    let Calc = new Calculator();
    expect(Calc.square(3)).toBe(9);
    expect(Calc.result).toBe(9);
});

test('Calculator square roots 9 and gets 3 as a result',() =>{
    let Calc = new Calculator();
    expect(Calc.squareRoot(9)).toBe(3);
    expect(Calc.result).toBe(3);
});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let Calc = new Calculator();
    let myArray = [1,2,3,4];
    expect(Calc.add(myArray)).toBe(10);
    expect(Calc.result).toBe(10);

});