// Async/Await
import { obterUsuario } from './obterUsuario.js';
import { obterTelefone } from './obterTelefone.js';
import { obterEndereco } from './obterEndereco.js';

const main = async () => {
  
  console.time('TESTE DE TEMPO DE EXECUCAO')
  const usuario = await obterUsuario();
  const telefone = await obterTelefone(usuario.id);
  const endereco = await obterEndereco(usuario.id);
  console.timeEnd('TESTE DE TEMPO DE EXECUCAO')
  
  console.log(usuario, endereco, telefone);
}
main()