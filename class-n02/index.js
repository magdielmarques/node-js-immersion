// Callback de testes
/*
import { user1 } from './execucaoErrada.js';
import { user2 } from './execucaoCorreta.js';

user1()
user2()
*/

/* 
  -> Callback simulando situacao real
  
    01 - Obter um usuario
    02 - Obter o numero de telefone de um usuario a partir de seu ID
    03 - Obter o endereco do usuario a partir de seu ID

  Obs.: Foi utilizando SetTimeout para simular tempo de espera de requisicao ao banco
*/

import { obterUsuario } from './obterUsuario.js';
import { obterTelefone } from './obterTelefone.js';

function resolverUsuario(erro, usuario) {
  if (erro) console.log('erro -> ', erro)
  else console.log('usuario -> ', usuario)
}

obterUsuario(resolverUsuario) 


