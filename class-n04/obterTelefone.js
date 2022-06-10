export function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(
        {
        ddd: 67,
        telefone: '99990-0000'
        }
      )
    }, 2000)
  })
}