export function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(
      null, 
      { endereco: 'Av. das Bandeirass',
        idUsuario: idUsuario 
      });
  }, 2000)
}