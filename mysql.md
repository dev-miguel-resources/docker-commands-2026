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
