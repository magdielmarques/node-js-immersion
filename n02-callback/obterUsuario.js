class Usuario {
  id;
  nome;
  dataNascimento;
  
  constructor(props) {
    Object.assign(this, props)
  }
}

export function obterUsuario(callback) {
  setTimeout(() => {
    const usuario = new Usuario()
    usuario.id = 1;
    usuario.nome = 'Magdiel';
    usuario.dataNascimento = new Date();
    return callback(null, usuario);
  }, 1000)
}