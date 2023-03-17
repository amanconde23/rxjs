const { interval } = require("rxjs");

/* criacao do observable, vai gera um stream de dados */
const obs$ = interval(1000);

/* recebe funcao callback, sempre que um novo numero eh gerado, essa funcao eh chamada (no caso de 1 em 1 seg) */
const subscription1 = obs$.subscribe((num) => {
  console.log(num);
});

const subscription2 = obs$.subscribe((num) => {
  console.log(num * 100);
});

/* depois de 6 seg a aplicacao finaliza */
setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 6000);
