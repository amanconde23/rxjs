const { Observable } = require("rxjs");

const obs$ = Observable.create((subscriber) => {
  /* qdo chama next, um novo dado eh criado na stream de dados */
  subscriber.next("RxJS");
  subscriber.next("é");
  subscriber.next("muito");
  setTimeout(() => {
    subscriber.next("legal!");
    subscriber.complete();
  }, 2000);
  /* assim que completa nao manda mais nenhum dado */
});

obs$.subscribe((texto) => {
  console.log(texto);
});
