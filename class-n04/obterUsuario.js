class Usuario {
  id;
  nome;
  dataNascimento;
  
  constructor(props) {
    Object.assign(this, props)
  }
}

export function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = new Usuario()
      usuario.id = 1;
      usuario.nome = 'Magdiel';
      usuario.dataNascimento = new Date();
      return resolve(usuario);
    }, 1000)
  })
}