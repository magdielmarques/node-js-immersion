class Usuario {
  id;
  nome;
  dataNascimento;
  
  constructor(props) {
    Object.assign(this, props)
  }
}

export function obterUsuario() {
  setTimeout(() => {
    const user = new Usuario()
    user.id = 1;
    user.nome = 'Magdiel';
    user.dataNascimento = new Date();
    return user;
  }, 1000)
}