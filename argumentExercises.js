// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i ++) {
//         total += arguments[i];
//     }
//     return total;
//     console.log(arguments);
// }

// function sum(...args) {
//     return args.reduce((acc, ele) => acc + ele);
// }

// console.log(sum(1,2,3,4,5));

Function.prototype.myBind = function(ctx,...bindArgs) {
    const func = this;
    return function(...callArgs) {
        return func.call(ctx, ...bindArgs, ...callArgs);
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   markov.says.myBind(pavlov)("meow", "a tree");
//   markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc, ele) => acc + ele);
        } else {
            return _curriedSum;
        }
    }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let numbers = [];
    const func = this;
    return function _curry(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return func.apply(null, numbers);
        } else {
            return _curry;
        }
    }
}
