const addition = require('./addition');
const multiplication = require('./multiplication');
const division = require('./division');
const subtraction = require('./subtraction');
const squaring = require('./squaring');
const squareRooting = require('./squarerooting');

class MathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        } else {
            return addition.sum(a,b);
        }
    }
    static product(a,b) {
        return multiplication.multiply(a,b);
    }
    static quotient(a,b) {
        return division.divide(a,b);
    }
    static subtract(a,b){
        return subtraction.subtract(a,b);
    }
    static square(a){
        return squaring.square(a)
    }
    static squareRoot(a){
        return squareRooting.squareRoot(a)
    }

    static sumList(myarray = []){
        let result = 0;
        myarray.forEach(function (item){
            result = sum(result,item);
        });

        return result;

    }
}

module.exports = MathOperations;