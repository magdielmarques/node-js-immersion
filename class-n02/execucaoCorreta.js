export class Usuario {
  retornaDadosUsuario(callback) { // 3 - mando retorno como parametro para a callback
    setTimeout(() => { // 2
      return callback({ nome: 'Magdiel Marques Macedo'})
    })
  }
}

export function user2() {
  let usuario = new Usuario()

  const result = usuario.retornaDadosUsuario((resultado) => { // 1
    console.log(resultado); // 4 - retorna resultado
  })
}

/* 
  A funcao de callback passada como argumento sincronizara os resultados
*/