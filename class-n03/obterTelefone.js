export function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: 99990000,
      ddd: 67
    })
  }, 2000)
}