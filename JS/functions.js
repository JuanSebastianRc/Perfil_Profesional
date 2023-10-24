//const para constantes
const pi = 3.1416;
const pul = 2.54;
//var para variables globales
var cant_days = 10;
var   name    = 'Juan Sebastian' ;
//let para variables globales
let count = 5;
let  i    = 6;

//############## FORMAS DE IMPRESION O SALIDAS EN PANTALLA
//alert
//alert(name);
//console
console.log(cant_days);
console.log("10");
//body pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Juan Sebastian</h1>"
document.getElementById("text_two").innerText = "<h1>Juan Sebastian</h1>"
//librerias
Swal.fire({
    icon: 'success',
    title: 'juan sebastian',
    text: 'Estudiante ufpso',
    footer: name,
})

//########### tipos de datos
let Number_one = 10;
let Number_two = 5.5;
// string
let text = "texto";
//booleanos
let boolean = true;
let boolean_2 = false;
//array
let array_num = [1,2,3,4,5];
let array_tex = ["lunes","martes","miercoles","jueves","viernes"];
let array_mix = [1.5, "a",10, "b"];
let array_mul = [
    {name: "juan", last_name: "ropero", age: 17},
    {name: "luis", last_name: "meneces", age: 50},
    {name: "marcos", last_name: "criado", age: 22},
    {name: "jose", last_name: "caicedo", age: 9}
];

//################### OPERADORES BASICOS
//suma
var suma = Number_one + Number_two;
console.log("suma= " + suma);
//resta
var resta = Number_one - Number_two;
console.log("resta= " + resta);
//multiplicacion
var multi = Number_one * Number_two;
console.log("multiplicacion= " + multi);
//division
var div = Number_one / Number_two;
/* divi=divi.toFixed(2);*/
console.log("division= " + div.toFixed(2));
//modulo
var mod = Number_one % Number_two;
console.log("modulo= " + mod);

console.log(
"suma= " + suma + "\n" +
"resta= " + resta + "\n" +
"multiplicacion= " + multi + "\n" + 
"division= " + div.toFixed(2) + "\n" +
"modulo= " + mod
    )
    var respuesta = "suma= " + suma + "<br>" +
    "resta= " + resta + "<br>" +
    "multiplicacion= " + multi + "<br>" + 
    "division= " + div.toFixed(2) + "<br>" +
    "modulo= " + mod;

    Swal.fire({
        icon: 'success',
        title: 'juan sebastian',
        html: respuesta,
        background: '#fff'
    })
