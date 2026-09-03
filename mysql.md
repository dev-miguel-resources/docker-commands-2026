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
docker kill mysqlserver
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

### 15. Para inspeccionar un contenedor

```
docker inspect mysqlserver
```

### 16. Para inspeccionar una imagen

```
docker inspect mysql:8.4.8
```

### 17. Para crear un contenedor con un volumen anónimo

```
docker run -d --name mysqlserver -p 3308:3306 -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 18. Para listar y filtrar los volúmenes

```
docker volume ls
docker volume ls | findStr mysql (windows)
docker volume ls | grep mysql (linux/mac)
```

### 19. Para eliminar un contenedor con un volumen anónimo

```
docker rm -fv mysqlserver
```

### 19. Para crear un contenedor con un volumen host

```
docker run -d --name mysqlserver -p :3308:3306 -v E:\docker_examples\docker\volumes\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 20. Para eliminar el contenido de una carpeta de volumen host

```
rmdir /s /q E:\docker_examples\docker\volumes\mysql (windows)
rm -rf E:\docker_examples\docker\volumes\mysql (linux/mac)
```

### 20. Para crear un contenedor con un volumen nombrado

```
docker run -d --name mysqlserver -v vol-mysql-test-3:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 21. Para eliminar un volumen nombrado

```
docker volume rm vol-mysql-test-3
```

### 22. Para inspeccionar un volumen nombrado o anónimo

```
docker inspect vol-mysql-test-3
```

### 23. Para crear un contenedor con asignación de puertos

```
docker run -d --name mysqlserver -p 3308:3306 -v vol-mysql-test-3:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 24. Para remover volúmenes huerfanos (Nombrados y Anónimos)

```
docker volume prune
docker volume prune -f
```

### 25. Script de pruebas para volúmenes

```
USE sqldbtest;

CREATE TABLE IF NOT EXISTS `users` (
 `id` INT auto_increment PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
```

### 26. Para crear una red

```
docker network create net-prueba-sql
docker network create net-prueba-sql-2 -d bridge
```

### 27. Para listar y filtrar una red

```
docker network ls
docker network ls | findStr sql (windows)
docker network ls | grep sql (linux/mac) 
```

### 28. Para asociar un contenedor a una red

```
docker run -d --name mysqlserver -p 3308:3306 --network net-prueba-sql -v vol-mysql-test-3:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
```

### 29. Para inspeccionar una red

```
docker network inspect net-prueba-sql
```

### 30. Para conectar una o más redes a un contenedor

```
docker network connect net-prueba-sql-2 mysqlserver
```

### 31. Para desconectar una o más redes asociada a un contenedor

```
docker network disconnect net-prueba-sql-2 mysqlserver
```

### 32. Para eliminar una o más redes

```
docker network rm net-prueba-sql-2
```

### 33. Definición de una red host

```
docker network create net-prueba-sql-3 -d host
No se puede utilizar porque hace referencia a la red local fuera de docker
```

### 34. Definición de una red none

```
docker network create net-prueba-sql-3 -d none
No se puede utilizar porque hace referencia al estado interno privada de las redes
```

### 35. Prueba de conectividad en una red

```
docker run -it --rm --network net-prueba-sql alpine ash
# ping -c 4 mysqlserver
```

### 36. Prueba de conectividad 2 en una red

```
docker run -it --rm --network net-prueba-sql-2 alpine ash
# ping -c 4 mysqlserver
ping: bad address 'mysqlserver'
```

### 37. Prueba de conectividad 3 en una red, cuando los recursos pertenecen a la red bridge por default

```
docker run -d --name mysqlserver -p 3308:3306 -v vol-mysql-test-3:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=123 -e MYSQL_DATABASE=sqldbtest mysql:8.4.8
docker run -it --rm --network alpine ash
# ping -c 4 172.17.0.2
```

### 37. Para remover redes huerfanas

```
docker network prune
docker network prune -f
```

### 38. Para utilizar el modo interactivo

```
Pendiente para la próxima sesión.
```
