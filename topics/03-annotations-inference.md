# TYPE ANNOTATIONS

* Type annotations are used to explicitly specify the type of a variable or function parameter.
* TypeScript uses the syntax : type after an identifier as the type annotation, where type can be any valid type.

```
let counter: number;
counter = 1;
// counter = 'Hello'; // compile error

let counter2: number = 1; // same as above

let myName: string = 'John';
let age: number = 25;
let active: boolean = true;
```

## ARRAY TYPES

Array types can be specified in two ways:

* Using the type[ ] syntax
* Using the Array `<type>` syntax

```
let names: string[] = ['John', 'Jane', 'Mary'];
let ages: Array
```

## OBJECT TYPES

Object types can be specified in two ways:

* Using the {key: type} syntax
* Using the interface syntax

```
let person: { name: string, age: number } = {
    name: 'John',
    age: 25
};

interface Person {
    name: string;
    age: number;
}
```


## FUNCTION ARGUMENTS & RETURN TYPES

Function types can be specified in two ways:


* Using the (param: type, param: type) => type syntax
* Using the interface syntax

```
let greeting : (name: string) => string;greeting = function (name: string) {
    return Hi ${name};
};
```

* throws compile error: void' is not assignable to type string

```
  greeting = function () {
        console.log('Hello');
    };
```


#  TYPE INFERENCE

TypeScript can infer the type of a variable from its value. This is called type inference.

```
function increment(counter: number) {
    return counter++; //TypeScript infers the following return type of the increment() function as number
}

// It is the same as:

function increment2(counter: number) : number {
    return counter++;
}
```


## TYPE INFERENCE WITH UNION TYPES

When a variable is declared with a union type, TypeScript will infer the type of the variable as the first type in the union type.

```
let myName2: string | number = 'John'; // TypeScript infers the type of myName2 as string
myName2 = 25; // TypeScript infers the type of myName2 as number

let items = [1, 2, 3, null]; // TypeScript infers the type of items as (number | null)[]
let items2 = [0, 1, null, 'Hi']; // TypeScript infers the type of items as (number | null | string)[]

let arr = [new Date(), new RegExp('\d+')]; // TypeScript infers the type of arr as (Date | RegExp)[] i.e union type
```
