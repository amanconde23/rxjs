const { Observable } = require("rxjs");

const obs$ = Observable.create((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("é");
  subscriber.next("muito");
  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    throw "Erro!!!";
  }
});

obs$.subscribe(
  // chamada a cada novo dado gerado na stream de dados
  (texto) => console.log(texto),
  // erro
  (err) => console.log(err),
  // sucesso
  () => console.log("Fim")
);
