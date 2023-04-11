// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let nome = prompt("Scrivi il nome palindromo da verificare")
console.log(nome);

function ruotaNome( nome ){
  let parolaRibaltata = ''

  for ( let i = nome.length - 1; i >= 0; i-- ){
    parolaRibaltata += nome[i]
  }
  return parolaRibaltata
}

let nomeRuotato = ruotaNome(nome)

if (nome == nomeRuotato){
  console.log(`il nome ${nome} è palindromo`);
}else{
  console.log(`il nome ${nome} non è palindromo`);
}


















// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let utente = prompt ('pari o dispari?')
console.log(utente);
let numeroUtente = parseInt ( prompt ('scegli un numero da 1 a 5'))
console.log(numeroUtente);

function numeroRandom(min, max){
  return Math.floor( Math.random() * max ) + min;
}

let numeroPc = numeroRandom( 1, 5)
console.log(numeroPc);
let somma = numeroUtente + numeroPc
console.log(somma);

function pariDispari(x) {
  if(x % 2 == 0 ){
    return 'pari'
  }else {
    return 'dispari'
  }
}

if(pariDispari(somma) == utente){
  console.log('hai vinto');
}else{
  console.log('pc vice');
}