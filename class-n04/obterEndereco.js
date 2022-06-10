export function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(
        { 
          rua: 'Av. das Bandeiras',
          numero: 581,
          cidade: 'Cidade Vizinha',
          estado: 'LOL',
          idUsuario: idUsuario 
        });
    }, 2000)
  })
}