//Modulo para exportacion de una función.
let greet = require('./greet1');
greet();

/*se llama al objeto y para acceder a  
la funcion se le hace la inyeccion de la funcion que es la greet
let greet2 = require('./greet2').greet;*/

//esto hace lo mismo solo que inyecta la funcion al momento de imprimirla
let greet2a = require('./greet2');
const greet3 = require('./greet3');
greet2a.greet();


/*imprime directamente lo que hay dentro de la funcion sin embargo no puede 
acceder a la funcion greet ya que esta privada
const greet3 = require('./greet3');*/
console.log(greet3);
const {greting} = require('./greet3');

greet3.greeting = "Hello from the App";

let greet3b = require('./greet3');
greet3b.greet();

const Greet4 = require('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');
greet5.greet();
greet5.jump();
greet5.velocity();