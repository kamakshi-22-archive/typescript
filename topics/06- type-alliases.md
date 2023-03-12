
# Type Alliases

```
type chars = string;
let messsage: chars; // same as string type

//useful to create type alliases for union types

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```
