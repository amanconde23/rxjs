/* como criar um operador tipo from, que recebe um array, e gera uma stream de dados para cada elemento do array */
const { Observable, noop } = require("rxjs");

// para cada elemento do array executa next
function fromArray(array) {
  return Observable.create((subscriber) => {
    array.forEach((elemento) => subscriber.next(elemento));
    // depois que passou por cada elemento do array, pode completar
    subscriber.complete();
  });
}

fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).subscribe(
  (numero) => console.log(numero),
  // qdo nao quer tratar erro
  noop,
  () => console.log("Fim")
);
