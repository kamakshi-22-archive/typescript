## Generics

* allows us to write the reusable and generalized form of functions, classes and interfaces.

```
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers); 

//same as above
let randomEle = getRandomElement(numbers); 

console.log(randomEle);

```

* function uses type variable T which allows to capture the type that is provided at the time of calling the function.
* function is generic because it can work with any data type including string, number, objects,…

# Generic Functions with multiple types

```
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);

---
```
