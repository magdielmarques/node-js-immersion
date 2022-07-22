## ---- create a new user into mongo with CLI
docker exec -it mongo-guitar mongo --host localhost -u admin -p senhadmin --authenticationDatabase admin --eval  "db.getSiblingDB('estudo').createUser({user: 'myuser', pwd: 'mypassword', roles: [{role: 'readWrite', db: 'guitar'}]})"

## ---- run docker image
npm start:docker

## ---- run project
npm start

## ---- conectar ao mongodb via cli
docker exec -it mongodb-estudo mongo -u magdielmarques -p minhasenha --authenticationDatabase estudo