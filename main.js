/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

//1ste link//
let frontend = document.querySelector('a:nth-of-type(1)')
frontend.addEventListener('mouseover', hovered)
frontend.addEventListener('mouseout', hoveredOut)

function hovered() {
  frontend.classList.add('mouseover')
  console.log('het werkt')
}

function hoveredOut() {
  frontend.classList.remove('mouseover')
  console.log('gelukt')
}

// 2de link//
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', geklikt)

function geklikt() {
  design.classList.add('click')
  console.log('doet het')
}


//3de link//

let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('mouseover', hover)
and.addEventListener('mouseout', hoverOut)

function hover() {
  and.classList.add('pulser')
  console.log('yess')
}

function hoverOut() {
  and.classList.remove('pulser')
  console.log('gelukt')
}


//4de link//
let development = document.querySelector('a:nth-of-type(4)')
window.addEventListener('keydown', stretch )

function stretch(event) {
  if (event.keyCode === 80) {
    console.log('stretch')
    development.classList.toggle('stretch')
  }
}