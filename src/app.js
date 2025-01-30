/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Declaramos números y palos
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const palos = ["♠", "♣", "♥", "♦"];

  //1ª función
  function generarNaipe() {
    //Número aleatorio de la carta
    const numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];
    //Palo aleatorio de la carta
    const palosRandom = palos[Math.floor(Math.random() * palos.length)];
    //El color de la carta (♥ ♦ si es rojo o ♠ ♣ si es negro)
    const color = palosRandom == "♠" || palosRandom == "♣" ? "negro" : "rojo";
    //Comprobamos por consola
    console.log(palosRandom + " : " + color + ", nº " + numeroRandom);

    //Declaramos variable del div
    const naipeDiv = document.getElementById("naipeGenerado");
    //Identificamos la clase para colocar el color de la carta (CSS)
    naipeDiv.className = "card  " + color;
    //Añadimos el contenido del naipe
    let paloarriba = "<div class='palo palo-arriba'>" + palosRandom + "</div>";
    let numeroAleatorio = "<div class='numero'>" + numeroRandom + "</div>";
    let paloAbajo = "<div class='palo palo-abajo'>" + palosRandom + "</div>";
    naipeDiv.innerHTML = paloarriba + numeroAleatorio + paloAbajo;
  }

  //Llama a la funcion
  generarNaipe();

  //PUNTO EXTRA (Botón):
  //Declaramos la variable button
  let btnNaipe = document.getElementById("btnNaipe");
  //Añadimos el evento click que genera una carta aleatoria
  btnNaipe.addEventListener("click", generarNaipe);

  //PUNTO EXTRA (Temporizador):
  let temporizador;
  let segundosrestantes = 10;

  //Función para iniciar temporizador
  function inicioTemporizador() {
    console.log("Empieza el contador => " + segundosrestantes);
    temporizador = setInterval(() => {
      segundosrestantes--;
      console.log(segundosrestantes);

      if (segundosrestantes === 0) {
        generarNaipe();
        segundosrestantes = 10;
      }
    }, 1000);
  }

  //Función para parar el contador
  function paroTemporizador() {
    clearInterval(temporizador);
    segundosrestantes = 10;
    console.log("Se paró la cuenta atrás.");
  }

  let btnInicioTemp = document.getElementById("btnIniciar");
  btnInicioTemp.addEventListener("click", inicioTemporizador);

  let btnPararTemp = document.getElementById("btnParar");
  btnPararTemp.addEventListener("click", paroTemporizador);

  //setInterval(function() {
  //    console.log("Hola Mundo");
  //}, 2000);

  //console.log("setTimeout() Ejemplo...");

  //Punto extra (redimensionar la carta)
  function redimension() {
    //Declaramos las variables
    const naipe = document.querySelector(".card");
    const widthDimension = document.getElementById("ancho");
    const heightDimension = document.getElementById("altura");

    //Redimensionamos el ancho y la altura
    naipe.style.width = `${widthDimension}px`;
    naipe.style.height = `${heightDimension}px`;
  }

  let btnTamano = document.getElementById("btnTamano");
  btnTamano.addEventListener("click", redimension);
};
