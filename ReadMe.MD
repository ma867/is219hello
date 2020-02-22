[![Build Status](https://travis-ci.com/ma867/is219hello.svg?branch=master)](https://travis-ci.com/ma867/is219hello)

[![Coverage Status](https://coveralls.io/repos/github/ma867/is219hello/badge.svg?branch=master)](https://coveralls.io/github/ma867/is219hello?branch=master)


# Object Oriented Principles

### Encapsulation:
Process by which data and methods are bundled together. Its purpose its data hiding, meaning that objects cannot access methods unless they are public. We see this reflected in the class Calculator, which has the following methods: add, divide, multiply, subtract, square, squareroot, and sumList. Since none of these are labeled as private or protected, we can instantiate a calculator object and call on any of the aforementioned

```
const MathOperations = require('./MathOperations.js');

class Calculator{
    add(a = null, b = null) {
        ...
    }

    divide(a = null,b = null){
        ...
    }

    multiply(a = null,b = null){
        ...
   }
    ....

}

module.exports = Calculator;
```
### Inheritance:
Just as the word says inheritances is the concept that an extended class, or child class, of a class, or parent class can inherit the properties or methods from its parent class. Its purpose is to make code safe for reuse and to provide an understandable hierarchy for code. For example, we could create a class called SumCalculator that inherits sum methds from the parent class, Calculator.
```
class SumCalculator extends Calculator {
    ...
}
```

### Polymorphism:
This is the idea that an object can take on any forms. This means that a child class object can be treated the same way as any other class in the parent hierarchy. For example, a new SumCalculator object can become a new Calculator object and viceversa.
```
SumCalculator mycalc = new Calculator();
```
### Abstraction:
Abstraction allows us to select data from a larger pool to show only the relevant details to the object. It helps us reduc the complexity of the code