# Local development with docker-compose example

## Contents

* Update a running container in a docker-compose cluster
* Remote debug on a container (Node.js)

## Update a running container in a docker-compose cluster

```bash
docker-compose up -d --no-deps --build node
```

...which is equivalent to

```bash
# Build
docker-compose build node

# Stop
docker-compose stop node

# Start
docker-compose up -d --no-deps node
```

## Remote debug on a container (Node.js)

1. [Expose debugger port in docker-compose.yml](https://github.com/piglovesyou/local-dev-with-docker-compose/blob/e79f3d6b61868c01e442209fa969cace53575d02/docker-compose.yml#L12)
2. [Expose debugger port in Dockerfile](https://github.com/piglovesyou/local-dev-on-docker-compose/blob/e79f3d6b61868c01e442209fa969cace53575d02/node/Dockerfile#L6)
3. [Don't forget to expose debugging process with 0.0.0.0](https://github.com/piglovesyou/local-dev-on-docker-compose/blob/e79f3d6b61868c01e442209fa969cace53575d02/node/package.json#L13) to make it available from different IPs

## Thanks

* https://staxmanade.com/2016/09/how-to-update-a-single-running-docker-compose-container/
* https://dev.to/docker/dockerizing-a-nodejs-express-redis-app-with-nginx-proxy-using-docker-compose-17ge
* https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/

