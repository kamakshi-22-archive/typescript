# Functions

**Syntax:**

```
function name(parameter: type, parameter:type,...): returnType {
   // do something
}
```

**Example:**

```
function add(a: number, b: number): number {
    return a + b;
}
let sum = add('10', '20'); //error


function echo(message: string): void {
    console.log(message.toUpperCase()); //function doesn't return a value
}
```

**Example:**

```
function add(a: number, b: number): number {
    return a + b;
}
let sum = add('10', '20'); //error


function echo(message: string): void {
    console.log(message.toUpperCase()); //function doesn't return a value
}
```

**Assign a function to a variable:**

```
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
```

## Optional Parameters

* The optional parameters must appear after the required parameters in the parameter list.

```
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
```

## Default Parameters

```
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

# Rest Parameters

A rest parameter allows you a function to accept zero or more arguments of the specified type. In TypeScript, rest parameters follow these rules:

* A function has only one rest parameter.
* The rest parameter appears last in the parameter list.
* The type of the rest parameter is an array type.

```
function fn(...rest: type[]) {
   //...
}
```

**Example:**

```
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;  //calculates the total of numbers passed into it.
}

// we can pass one or more numbers to calculate the total:

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```
