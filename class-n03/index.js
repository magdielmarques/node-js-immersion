// Promise
// obs.: utilizado apenas para fins de estudo de codigos aninhados

import { obterUsuario } from './obterUsuario.js';
import { obterTelefone } from './obterTelefone.js';
import { obterEndereco } from './obterEndereco.js';

obterUsuario()
  .then((usuario) => 
    obterEndereco(usuario.id)
      .then((endereco) => {
          return { endereco: endereco, usuario: usuario }
      })
  )
  .then((obj) => 
      obterTelefone(obj.usuario.id)
        .then((result) => console.log(result, obj))
  )
  .catch((err) => console.log(err))
      
