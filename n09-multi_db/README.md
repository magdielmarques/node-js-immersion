Commands (macOS Monterey): \
  docker ps --> show the process running into the desktop
  docker exec -it postgres /bin/bash --> entra no container para fazer alteracoes 
  ## ---- postgres image
    docker run --name postgres-estudo -e POSTGRES_USER=magdielmarques -e POSTGRES_PASSWORD=minhasenha -e POSTGRES_DB=estudo -p 5432:5432 -d postgres
    docker exec -it id-do-meu-container /bin/bash
    exit
    docker run --link nome_do_meu_db:db -p 8080:8080 adminer
    docker run --name adminer --link postgres-estudo:postgres -p 8080:8080 adminer

  ## ---- mongodb
