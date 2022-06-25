Commands (macOS Monterey): \
  docker ps --> show the process running into the desktop

  postgres image \
    docker run --name postgres -e POSTGRES_USER=magdielmarques -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=estudo -p 5432:5432 -d postgres 
    docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
    docker run --name postgres-estudo -e POSTGRES_PASSWORD=mysecretpassword -d postgres   

