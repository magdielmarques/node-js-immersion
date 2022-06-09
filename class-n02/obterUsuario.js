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
    const user = new Usuario()
    user.id = 1;
    user.nome = 'Magdiel';
    user.dataNascimento = new Date();
    return callback(null, user);
  }, 1000)
}