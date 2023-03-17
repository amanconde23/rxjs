/* fazer uma chamada com axios, e com a resposta, gerar um observable */
const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
const axios = require("axios");

// forma de fazer requisicao
/* function httpGet(url) {
  return Observable.create((subscriber) => {
    axios
      .get(url)
      .then((response) => subscriber.next(response.data))
      .then(() => subscriber.complete());
  });
}

httpGet("http://localhost:3001/films").subscribe((dado) => console.log(dado));

*/

/* ao inves de receber o array completo, vai dar cada um dos elementos do array, como uma stream de dados */
function httpGet(url) {
  return Observable.create((subscriber) => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          response.data.forEach((elemento) => {
            subscriber.next(elemento);
          });
        } else {
          subscriber.next(response.data);
        }
      })
      .then(() => subscriber.complete());
  });
}

/* pegando somente os atores */
httpGet("http://localhost:3001/films")
  .pipe(
    map((film) => film.Actors),
    /* transformando string em array e faz o tratamento de remover espacos indesejados antes ou depois da virgula*/
    map((actorsString) => actorsString.split(/\s*,\s*/g))
  )
  .subscribe((actorsArray) => console.log(actorsArray));
