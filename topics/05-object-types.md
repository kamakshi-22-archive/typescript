# OBJECT TYPES

## object

```
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

employee = "Jane"; //error : can't reassign a primitive value to the employee object
```

Explicitly specify properties of the `employee` object

```
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

// then assign employee object to a literal object:

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// or combine both syntaxes
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

##### Object

* The `Object` type, however, describes functionality that is available on all objects.
* For example, the `Object` type has the `toString()` and `valueOf()` methods that can be accessible by any object.

##### The empty type {}

* The empty type `{}` describes an object that has no property on its own.
* TS issues compile-time error when we try to access a property on such object

```
let vacant: {};
vacant.firstName = 'John'; //error
```


# Array

```
let skills: string[];

skills[0] = "Problem Solving";
skills[1] = "Programming";

skills.push('Software Design');

let skills = ['Problem Sovling','Software Design','Programming'];
skills.push(100); //error: can't add a number to the string array.

```

##### Array properties and methods

* length

```
let series = [1, 2, 3];
console.log(series.length); // 3
```

* looping : use method such as `forEach()`, `map()`, `reduce()`, and `filter()`

```
let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log(doubleIt); //[ 2, 4, 6 ] 
```

# Tuple

* works like an [array](https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/) with some additional considerations:

  * The number of elements in the tuple is fixed.
  * The types of elements are known, and need not be the same.

```
let skill: [string, number];
skill = ['Programming', 5];

// order is important
skill = [5, 'Programming']; //error
```

# Enum

* group of named constant values
* stands for enumerated type
* use it when:

  * Have a small set of fixed values that are closely related
  * And these values are known at compile time.

```
enum name {constant1, constant2, ...}; // constant1, constant2, etc., are also known as the members of the enum
```

```
enum Month {
    Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true
```

# Any

* use when we need to opt-out of the type checking and allow the value to pass through the compile-time check
* iIf we declare a variable without specifying a type, TypeScript assumes that we use the `any` type.

# Void

* denotes the absence of having any type at all. It is a little like the opposite of the [`any` ](https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type/) type
* can use the `void` type as the return type of functions that do not return a value

```
function log(message): void {
    console.log(messsage);
}
```

# Never

* a type that contains no values
* generally used to represent the return type of a function that always throws an error

```
function raiseError(message: string): never {
    throw new Error(message);
}

// The return type of the following function is inferred to the never type:

function reject() { 
   return raiseError('Rejected');
}

// return type of a function expression that contains an indefinite loop is also never

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
```

# Union

* allows combining multiple types into one type.

```
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

# String Literal Types

* allows defininge a type that accepts only one specified string literal

```
let click: 'click';

click = 'click'; // valid

click = 'dblclick'; // compiler error
```
