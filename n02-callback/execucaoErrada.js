export class User {
  returnUserData() {
    setTimeout(() => {
      return { nome: 'Magdiel Marques Macedo'}
    })
  }
}

export function user1() {
  let user = new User().returnUserData();
  console.log(user)
}

/* 
Retorna undefined pois a variavel user nunca recebeu o valor ate 
o termino de sua execucao. A funcao returnUserData e invocada corretamente,
porem, ao fazer a chamada de setTimeout ele pausa a execucao e continua a execucao de operacoes
menos custosas.

O VALOR E RETORNADO, POREM EM TEMPOS DE EXECUCAO DIFERENTE
*/