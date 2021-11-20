/*
console.log('Hola desde js')

/* Palabrs reservadas: let, var y const
 */
/*
let age = 0 //decalaracion y asignado un valor
console.log('Edad:', age)
age = 25
console.log('Edad:', age)

/* Buena practica */
/*
let Lastname = ''
console.log('Apellido:', Lastname) 
Lastname = 'Gutierrez Manriquez'
console.log('Apellido:', Lastname)

const pi = 2.1416
// pi = 2.1416 -> no se le puede reasignar un valor

// == ===
var number1 = 10
var number2 = '10'

console.log(number1 == number2) //verdadero porque solo compara el valor
console.log(number1 === number2) //falso porque compara otro tipo de dato

console.log(number1 != number2) //Falso porque solo compara el valor y si son iguales 
console.log(number1 !== number2) //Verdadero porque si son diferentes en el tipo de dato, aunque sean iguales


let firstname
firstname = 'Erik'
console.log('Nombre: ', firstname)

let Lastname
Lastname = 'Gutierrez Manriquez'
console.log('Apellidos: ', Lastname)

let age
age = '28'
console.log('Edad: ', age)

let job
job = 'Ingeniero de Servicio'
console.log('Trabajo/Descripción: ', job)
*/


/*
//condicional simple 
let age = 20

if(age >= 18){
    console.log('Ya puede votar')
}

console.log('continuar programa')
*/

//condicional if....else
/*
let cafe = false

if(cafe === true){
console.log('Hoy tomare cafe ')
}
else{
console.log('Hoy tomare té')
}

console.log('continuar programa')
*/

//condicional if....else....if condiciones anidadas
/*
let number = -10

if(number == 0){
    console.log('Es un numero neutral')
} 
else if (number > 0){
    console.log('Es un numero positivo')
} else {
    console.log('Es un numero Negativo')
}
console.log('Continuar programa')
*/

//condicional switch
/*
let operation = 'multiplicacion' 
let number = 3
let number2 = 6
console.log('operation: ',operation)
switch(operation){
    case 'suma':
        console.log('La suma es: ', number + number2)
        break
    case 'resta':
        console.log('La resta es: ', number - number2)
        break
    case 'division':
        console.log('La division es: ', number / number2)
        break
    case 'multiplicacion':
        console.log('La multiplicacion es: ', number * number2)
        break
    default:
        console.log('Operacion no permitida')
        break
}

prompt
*/

//mostar los numeros del 1 al 10
/*
let numbers = 10
let index = 0

for (index = 0; index < numbers ; index++) {
    console.log(index)
}
*/
/*
let numbers1 = 0

for (numbers1 = 0; numbers1 <= 10 ; numbers1++ ){
    console.log(numbers1)
}
*/
/*
let numbers2 = 0

for (numbers2 = 10; numbers2 >= 0 ; numbers2-- ){
    console.log(numbers2)
}

let numbers3 = 0
//numbers3=numbers3+2
for (numbers3 = 0; numbers3 <= 10 ; numbers3+=2 ){
    console.log(numbers3)
}
*/
/*
let numbers2 = 0

for (numbers2 = 10; numbers2 >= 0 ; numbers2-=2){
    console.log(numbers2)
}
*/

//1- determinar si una persona se puede pensionar.
//actualmente es necesario tener mas de 60 años y 750 semanas cotizadas
let age = 50
let weeks = 730

if (age >= 60){
    console.log('Tienes la edad para pensionarte', age )
}
else{
    console.log('Aun no tienes la edad para pensionarte:', age)
}
if (weeks >= 750){
    console.log('Has cotizado este numero de semanas:', weeks)
    console.log('Ya te puedes pensionar')
}
else {
    console.log('Has cotizado este numero de semanas:', weeks)
    console.log('Aun no te puedes pensionar')
}

console.log('siguiente programa')
//2- Tienes la arde libre y decides que si esta lloviendo, te quedas a ver una peli y si no, sacas a pasear a tu perro
let llueve = false

if (llueve == true){
    console.log('Me quedo a ver una pelicula')
}
else{
    console.log('Saco a pasear a Maty')
}

console.log('siguiente programa')

//3- Replicar el menu de operaciones que puedes realizar en un cajero automatico
console.log('Bienvenido al cajero')
let operation = prompt('Que operacion deseadas (retirar, abonar, ahorrar)')
let number = parseInt(prompt('Introduce la cantidad'))
console.log('Operación: ',operation)
switch(operation){
    case 'retirar':
        console.log('El retiro fue por:', number)
        break
    case 'abonar':
        console.log('El abono fue por: ', number)
        break
    case 'ahorrar':
        console.log('Estas ahorrando: ', number)
        break
    default:
        console.log('Operacion no permitida')
        console.log('Pasa a la sucursal mas cercana')
        break
}