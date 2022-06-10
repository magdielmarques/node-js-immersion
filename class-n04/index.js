// Async/Await
import { obterUsuario } from './obterUsuario.js';
import { obterTelefone } from './obterTelefone.js';
import { obterEndereco } from './obterEndereco.js';

const main = async () => {
  
  console.time('TESTE DE TEMPO DE EXECUCAO')
  const usuario = await obterUsuario();
  // const telefone = await obterTelefone(usuario.id);
  // const endereco = await obterEndereco(usuario.id);

  const result = await Promise.all([obterTelefone(usuario.id), obterEndereco(usuario.id)])
  console.timeEnd('TESTE DE TEMPO DE EXECUCAO')
  
  // console.log(usuario, endereco, telefone);
  console.log(usuario, result[0], result[1]);
}
main()