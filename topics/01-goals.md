**Typescript adds a type system to help avoid problems with dynamic types in JavaScript.**

- JS automatically infers the type from the value. The type of the variable changes as soon as the value is assigned:

  ```
  let box; console.log(typeof(box)); // undefined
  box = "Hello"; console.log(typeof(box)); // string
  box = 100; console.log(typeof(box)); // number
  ```

- Referencing a property that doesn't exist on the object is a common issue when working in JavaScript:

  ```
  function getProduct(id){
    return {
      id: id, name: `Awesome Gadget ${id}`, price: 99.5
    }
  }

  const product = getProduct(1);
  console.log(`The product ${product.Name} costs $${product.price}`);

  Output : The product undefined costs $99.5
  ```

  The issue with this code is that the product object doesn't have the Name property.

- Problem of passing the arguments in wrong order

  ```
  const showProduct = (name, price)  => {
    console.log(`The product ${name} costs ${price}$.`);
  };

  const product = getProduct(1);
  showProduct(product.price, product.name);

  Output: The product 99.5 costs $Awesome Gadget 1
  ```

**_Using Typescript to solve the problems of dynamic types:_**

- create an interface(shape) of the product object

```
interface Product{
    id: number,
    name: string,
    price: number
};

```

- referencing a property that doesn't exist will give error

```
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);

```

- explicitly assign types to function parameters to solve the problem of passing the arguments in the wrong order

```
const showProduct = (name: string, price:number)  => {
  console.log(`The product ${name} costs ${price}$.`);
};

const product = getProduct(1);
showProduct(product.price, product.name);
```

**Typescript brings the future JavaScript to today by supporting the upcoming features planned in the ES Next for the current JavaScript engines**
