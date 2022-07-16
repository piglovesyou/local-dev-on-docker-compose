## docker-compose - how to update a running container

```bash
docker-compose up -d --no-deps --build node
```

## ...which does

```bash
# Build
docker-compose build node

# Stop
docker-compose stop node

# Start
docker-compose up -d --no-deps node
```

## Thanks

* https://staxmanade.com/2016/09/how-to-update-a-single-running-docker-compose-container/
* https://dev.to/docker/dockerizing-a-nodejs-express-redis-app-with-nginx-proxy-using-docker-compose-17ge
* https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/