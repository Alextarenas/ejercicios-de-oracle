// vamos a dejar ambos en cero ya que la condicion para usarse esta dentro de la funcion declarada abajo en condicionesiniciales
let NumeroSecreto = 0;
let intentos =0;
// aca vamos a crear una lista para que el numero sorteado no se repita a la hora de hacer nuevamente el sorteo
// se usan corchetes o sea los cuadrados
let listaNumerosUsados = [];
let numeroMaximo = 10;

// se usa documento y ueryselector para seleccionar una etiqueta de html y editarla

// let titulo = document.querySelector('h1'); (se deja asi ya que se modifico con funtion y se le cambio el nombre a elemento html)

// se pone el titulo que ya estaba asignado y se le pone .innerhtml = 'lo que se ponga aca aparecera en el titulo de la pagina'

// titulo.innerHTML= 'Adivina el número secreto'; (se deja asi ya que se modifico con funtion)

/* vamos a usarlo otra vez pero con la etiqueda P que es donde va el parrafo y se puede ver en el html
let parrafo= document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

Lo acabamos de dejar asi ya que al poner la function podemos mostar la misma informacion sin tener que 
poner tantas lineas de codigo
*/

/* javascrip al momento de que tiene una funcion analiza si primero tiene una funcion al momento de leer el codigo
por eso mismo no hay problema en que momento se genere la funcion y lo que esté dentro de ella.
*/
//ejemplo:

function asignarTextoElemento (elemento, texto){
    let ElementoHtml = document.querySelector(elemento);
    ElementoHtml.innerHTML= texto;
    return;
}
// usamos la funcion (funtion) se usa para crear una funcion y el nombre que se uso en index.html
// en este caso (IntentoDeUsuario) y finalizamos con parentesis y {}
// resumiendo en index.html se declara lo que se va a usar y en java edita el codigo y demás.
// una buena practica es poner return al final de la function
// vamos a poner un id para espesificar el numero de imputo que se va a usar poniendo ID en el codigo html
// para seleccionar ese id de pone document.getelementbyId y entre parentesis y comillas simples se pone el imput y se pone despues .value
// triple = se usa para decirle al programa que tiene que ser igual en numero y tambien en tipo
function VerificarIntento (){
    let NumeroDeUsuaruio = parseInt(document.getElementById('valorUsuario').value);
    console.log (typeof(NumeroDeUsuaruio));
    console.log (NumeroSecreto);
    console.log (typeof(NumeroSecreto));
    console.log (NumeroDeUsuaruio);
    if (NumeroDeUsuaruio === NumeroSecreto){
        asignarTextoElemento ('p',`Felicidades, acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} *-*`);
        // vamos a habilitar el boton de reiniciar usando el siguiente codigo, en el cual despues del reiniciar
        // ponemos un punto y seguido un removeattribute y ahi entre parentesis se pone lo que se va a remover.
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
        // el usuario no acertó
        if (NumeroDeUsuaruio < NumeroSecreto){
            asignarTextoElemento('p', 'estas cerca, el número es mayor.');
         }else {
            asignarTextoElemento('p', 'estas cerca, el número es menor.')
        }
    }
    intentos++;
    // aca añadimos el limpiarvalor que fue insertado con la función que creamos.
    limpiarvalor();
    return;
}
// para poder limpiar el numero que puso el usuario podemos usar
function limpiarvalor() {
    let valor = document.getElementById('valorUsuario');
    valor.value = '';
}

function condicionesiniciales() {
    // aca se pone esto para que se le muestre al usuario y en vez de andar poniendo h1 o p solo se pone entre
    // las comillas lo que se va a mostrar
    asignarTextoElemento('h1','Adivina el número secreto');
    asignarTextoElemento('p',`El número secreto está entre 1 y ${numeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    intentos =1;
}

function ReiniciarElJuego() {
    
    //Lo que se va a hacer con esta opcion es lo siguiente
    //limpiar informacion que ha puesto el usuario
    limpiarvalor();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesiniciales();
    //desabilita el boton de juego nuevo
    // aca usamos el elemento setattribute para añadir por asi decilo la funcion que se va a habilitar.
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// retornar significa que nos va a devolver un valor.
function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    // si el numero esta en la lista en caso de que no, continuar como se estaba haciendo
    // el includes recorre la lista que se creo en la parte de arriba la de los corchetes cuadrados
    // y si esta en la lista devuelve un numero booleano (si es true o false)
    console.log (listaNumerosUsados);
    // si ya se usaron todos los numeros
    if (listaNumerosUsados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se usaron todos los números disponibles');
    }else{
        if (listaNumerosUsados.includes(numeroGenerado)) {
            return GenerarNumeroSecreto();
        }else {
            listaNumerosUsados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
   
}

condicionesiniciales();
