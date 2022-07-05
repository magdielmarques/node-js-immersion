Commands (macOS Monterey): \
  docker ps --> show the process running into the desktop
  docker exec -it postgres /bin/bash --> entra no container para fazer alteracoes 
  ## ---- postgres image
    docker run --name postgres-estudo -e POSTGRES_USER=magdielmarques -e POSTGRES_PASSWORD=minhasenha -e POSTGRES_DB=estudo -p 5432:5432 -d postgres
    docker exec -it id-do-meu-container /bin/bash
    exit
    docker run --link nome_do_meu_db:db -p 8080:8080 adminer
    docker run --name adminer --link postgres-estudo:postgres -p 8080:8080 adminer

  ## ---- mongodb image
    docker run --name mongodb-estudo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhadmin -d mongo:4
    docker run --name mongodb-adminer -p 3000:3000 --link mongodb-estudo:mongodb -d mongoclient/mongoclient
    docker exec -it mongodb-estudo mongo --host localhost -u admin -p senhadmin --authenticationDatabase admin --eval  "db.getSiblingDB('estudo').createUser({user: 'magdielmarques', pwd: 'minhasenha', roles: [{role: 'readWrite', db: 'estudo'}]})"
