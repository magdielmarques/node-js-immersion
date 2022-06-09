// Promise

import { obterUsuario } from './obterUsuario.js';
import { obterTelefone } from './obterTelefone.js';
import { obterEndereco } from './obterEndereco.js';

obterUsuario().then((result) => console.log('usuario', result))
obterEndereco(1).then((result) => console.log('endereco', result))