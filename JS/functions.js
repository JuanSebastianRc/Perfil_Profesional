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
        background: '#fff',
        timer: 1000,
        showConfirmButton: false
    });

    //######### OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (inverse, increment)
var bool    = false;
var numeric = 5;
if(!bool && numeric == "5"){
    console.log("ingrese if " + bool);
}else{
    console.log("ingrese else " + bool);
}

//OR || con if
var age = 31;
if(age == 31 || numeric == "5"){
    console.log("ingrese else " + bool);
    age++;
}else{
    console.log("ingrese else " + bool);
    age--;
}
console.log(age);

//FOR
console.log(array_tex.length);
for(let i=0; i<array_tex.length; i++){
    console.log(array_tex[i] + (i+1));
}

//WHILE
console.log("WHILE");
let j = 0;
while(j<array_tex.length){
    console.log(array_tex[j] + (j+1));
    j++;
}

console.log("DO WHILE");
//DO WHILE
let w = 0;
do{
    console.log(array_tex[w] + (w+1));
    w++;
}while(w<array_tex.length)

//CREAR FUNCIONES
function load_page(){
    alert("bienvenido a mi sitio web")
}

function change_color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
}

const btn_clear = document.querySelector("#limpiar")
btn_clear.addEventListener("click", () =>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000";   
});

//FORMULARIO DE REGISTRO
const form_register = document.getElementById("form_register");
const Nombres = document.getElementById("Nombres");
const Apellidos = document.getElementById("Apellidos");
const Validation = document.getElementById("Validation");

form_register.addEventListener("submit", event_name => {
    event_name.preventDefault();
    let info = "";
    if(Nombres.value.length <= 2 || Apellidos.value.length <= 2){
    info += "Nombres y/o Apellidos deben ser mayor a 2 letras";
    Validation.style.color = "red";
    }else{
        alert(Nombres + " " + Apellidos);
        Nombres.style.backgroundColor = "green";
        Apellidos.style.backgroundColor = "green";
    }
    Validation.innerText = info;
});
function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getFullYear())

    for(let a = 0; a<array_str.length; a++){
      console.log(array_mul[a].name)
    }
  }
  function validate(){
    alert("Funciona")
    let nombre = document.getElementById("nombres").value
    console.log(nombre.length)
    if(nombres.length<2){
      document.getElementById("apellidos").value
      document.getElementById("apellidos").value
      alert(nombres.toLowerCase())
      alert(nombres.concat("Carrascal"))
    }
  }
  // Pegar la funcion de whats
  let table = document.querySelector('.puntos tbody')
  let row = table.insertRow(0)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  cell1.innerHTML= nombre
  cell2.innerText= apellido
  cell3.innerHTML= number
  cell4.innerHTML= correo