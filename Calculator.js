const MathOperations = require('./MathOperations.js');

class Calculator{
    add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.result = MathOperations.sum(a);

        } else {
            return this.result = MathOperations.sum(a, b);
        }
    }

    divide(a = null,b = null){
        return this.result = MathOperations.quotient(a,b)
    }

    multiply(a = null,b = null){
        return this.result = MathOperations.product(a,b)
    }

    subtract(a,b){
        return this.result = MathOperations.subtract(a,b)
    }

    square(a){
        return this.result = MathOperations.square(a)
    }

    squareRoot(a){
        return this.result = MathOperations.squareRoot(a)
    }

    sumList(array){
        return this.result = MathOperations.sumList(array)
    }





}

module.exports = Calculator;
