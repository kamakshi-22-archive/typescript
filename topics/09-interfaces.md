# Interfaces

* TypeScript interfaces define the contracts within code.
* They also provide explicit names for type checking.

```
interface Person {
    firstName: string;
    lastName?: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john)); 

interface Employee extends Person {
	salary: number;
}

let mike = {
    firstName: 'Mike',
    lastName: 'Doe',
    salary: 50000
};

```

* using export & import

```
export interface Login{
	login: Person();
}

import { login } from './interface';


---
```
