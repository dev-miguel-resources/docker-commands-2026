# Crear un servidor de MYSQL mediante un contenedor de Docker

### 1. Descargar la imagen de MYSQL desde Docker Hub

```
docker pull mysql:8.4.8
```

### 2. Listar y filtrar imágenes de Docker

```
docker images
docker images | findStr mysql (windows)
docker images | grep mysql (mac/linux)
```

### 3. Eliminar una imagen de Docker

```
docker rmi mysql:8.4.8
docker rmi 9dcf90ad7bb5
```

### 4. Crear un contenedor con la imagen de MYSQL con nombre aleatorio

```
docker create mysql:8.4.8
```

### 5. Para eliminar un contenedor

```
docker rm vigorous_jang
docker rm e647bd59ef1b
docker rm -f vigorous_jang (forzado)
```

### 6. Crear un contenedor con nombre

```
docker create --name mysqlserver mysql:8.4.8
```

### 7. Listar y filtrar contenedores

```
docker ps (lista solo los que estén en running)
docker ps -a (lista independiente de su status)
docker ps -a | findStr mysql
docker ps | findStr mysql
docker ps -a | grep mysql (linux/mac)
docker ps | grep mysql (linux/mac)
```

### 8. Para monitorear un contenedor (logs)

```
docker logs mysqlserver
```

### 9. Para arrancar un contenedor

```
docker start mysqlserver
```

### 10. Crear y ejecutar un contenedor con variables de entorno y en modo attached

```
docker run --name mysqlserver -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 11. Crear y ejecutar un contenedor con variables de entorno y en modo dettached

```
docker run -d --name mysqlserver -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 12. Para detener y apagar un contenedor

```
docker stop mysqlserver (exited)
docker pause mysqlserver (paused)
docker unpause mysqlserver (para despertar un contenedor en pausa)
```

### 13. Para ver la documentación de comandos

```
docker --help
```

### 14. Para ingresar a la red virtual de Docker desde windows

```
\\wsl$
```
