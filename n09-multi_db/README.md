Commands (macOS Monterey): \
  docker ps --> show the process running into the desktop

  oficial postgres image \
    docker run \
    --name some-postgres \ --> nome da imagem
    -e POSTGRES_USER=myuser \ --> variavel de ambiente
    -e POSTGRES_PASSWORD=mysecretpassword \ -> variavel de ambiente
    -d postgres \
