
# PRIMITIVE TYPES

##### number - represents numeric values

```
let price: number;
let price = 9.95;

//Decimals
let counter: number = 0;
let x: number = 100, 
    y: number = 200;

// Binary
let bin = 0b100;
let anotherBin: number = 0B010;

// Hex
let hexadecimal: number = 0XA;

// Big Integers
let big: bigint = 9007199254740991n;
```

##### string - represents text data

```
let firstName: string = 'John';
let title: string = "Web Developer";

// Multipline Strings
let description = `This TypeScript string can 
span multiple 
lines
`;

// String Interpolation
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);
I'm John. 
I'm a Web Developer.
```

##### boolean - has true and false values

```
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;
```

##### null - has one value: null

##### undefined - has one value: undefined. It is a default value of an uninitialized variable

##### symbol - represents a unique constant value
