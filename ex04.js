/* criar um observable de array que gera uma stream de dados em cima de cada elemento do array */
/* esse codigo vai transformar os dados do stream -> notas (atraves do map) em status */
const { from } = require("rxjs");
const { map } = require("rxjs/operators");

const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7];

// cria um observable de notas;
/* const obs$ = from(notas);

obs$.subscribe((nota) => {
  console.log(nota);
});
 */

// forma encadeada
/* pipe cria um fluxo de execucao de transformacao dos dados; o que chega no subscribe eh os dados transformados (o que foi gerado no stream de dados mais as transformacoes feitas (ex: map)) */
from(notas)
  .pipe(
    map((nota) => (nota >= 7 ? "Aprovado" : "Reprovado")),
    /* faz uma segunda transformacao, a partir do resultado da primeira transformacao, pega a primeira letra desse resultado */
    map((status) => status[0])
  )
  // recebe os dados da stream transformados
  .subscribe((status) => {
    console.log(status);
  });
