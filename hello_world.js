const vm = require('vm');                              //Imports Virtual Machine Module.

const sandbox = { message : 'Hello, World!'};           //Creates an Object 'sandbox' with a variable and it's respective value.

vm.createContext(sandbox);                             //Creates a Context for the Object 'sandbox'.

vm.runInContext('console.log(message);',sandbox);      //Executes the code by printing the respective value of the variable used in the string , in context to the context 'sandbox'.

console.log(sandbox.message);