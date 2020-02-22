[![Build Status](https://travis-ci.com/ma867/is219hello.svg?branch=master)](https://travis-ci.com/ma867/is219hello)

[![Coverage Status](https://coveralls.io/repos/github/ma867/is219hello/badge.svg?branch=master)](https://coveralls.io/github/ma867/is219hello?branch=master)


# Object Oriented Principles

### Encapsulation:
Process by which data and methods are bundled together. Its purpose its data hiding, meaning that objects cannot access methods unless they are public. We see this reflected in the class Calculator, which has the following methods: add, divide, multiply, subtract, square, squareroot, and sumList. Since none of these are labeled as private or protected, we can instantiate a calculator object and call on any of the aforementioned

```
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
```


