# Automatizaciones con Docker Compose

### 1. Para levantar todos los recursos desde un docker-compose.yml

```
docker compose up -d
docker-compose up -d
```

### 2. Para detener y eliminar todo lo levantado por el compose

```
docker compose down
```

### 3. Para listar y filtrar servicios gestionados por compose

```
docker compose ps (solo para las apps en running)
docker compose ps -a (lista independiente de su status)
docker compose ps | findStr mysql (windows)
docker compose ps | grep mysql (linux/mac)
docker compose ps -a | findStr mysql (windows)
docker compose ps -a | grep mysql (linux/mac)
```

### 4. Para apagar/detener controladamente todos los servicios

```
docker compose stop
docker-compose stop
```

### 5. Para detener un servicio específico

```
docker compose stop mysql-service
docker-compose stop mysql-service
```

### 5. Para arrancar todos los servicios creados o detenidos

```
docker-compose start
docker compose start
```

### 6. Para arrancar uno o más servicios específicos creados o detenidos

```
docker-compose start mysql-service
docker compose start mysql-service
```

### 7. Para detener y eliminar uno o más servicios

```
docker-compose down mysql-service
docker compose down mysql-service
```

### 8. Para detener y eliminar uno o más servicios mediante confirmación

```
docker compose rm -s mysql-service-2
docker-compose rm -s mysql-service-2
```

### 9. Para crear y arrancar todos los recursos con nombre de archivo personalizado

```
docker compose -f docker-compose-env.yml up -d
```

### 10. Para detener/apagar todos los recursos con nombre de archivo personalizado

```
docker compose -f docker-compose-env.yml down -d
```

### 11. Para recrear el lanzamiento de un compose que sufrió cambio de archivo

```
docker compose -f docker-compose-env.yml up -d --force-recreate
```

### 12. Para detener y eliminar todos los servicios junto con sus volúmenes

```
docker compose -f docker-compose-env.yml down -v
```

### 13. Para obtener el archivo compose desde la terminal

```
docker compose config (si tiene nombre nativo: compose o docker-compose)
docker compose -f docker-compose-env.yml config (nombre personalizado)
```

### 14. Para lanzar un archivo compose con una especificación diferente al .env

```
docker compose --env-file .env.dev -f docker-compose.env.yml up -d
```
