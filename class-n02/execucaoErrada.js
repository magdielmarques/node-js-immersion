export class User {
  returnUserData() {
    setTimeout(() => {
      return { nome: 'Magdiel Marques Macedo'}
    })
  }
}
/* 
Retorna undefined pois a variavel user nunca recebeu o valor ate 
o termino de sua execucao. A funcao returnUserData e invocada corretamente,
porem, ao fazer a chamada de setTimeout ele pausa a execucao e continua a execucao de operacoes
menos custosas.
*/