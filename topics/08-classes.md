# Classes

```
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.#ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let john = new Peron(1, "John", "Doe");
let myName = john.getFullName();
console.log(myName); //John Doe

```

## MODIFIERS

* **`private`** modifier limits the visibility to the same-class only
* **`public`** modifier allows class properties and methods to be accessible from all locations
* **`protected`** modifier allows properties and methods of a class to be accessible within same class and within subclasses

  `e.g. protected ssn: string;`

# INHERITANCE

```
class Manager extends Person{
	constructor(id: number, name: string, address: string){
		super(id, name, address);
	}
}

let mike = new Manager(2. "Mike", "Doe");
let myName = mike.getFullName();
console.log(myName); //Mike Doe
```

# Getter and Setter

```

class Employee{
	#id: number;

	get empId(id: number){
		return this.#id;
	}

	set empId(id: number){
		return this.#id=id;
	}

}

let john = new Employee(3);
john.empId = 100;
```
