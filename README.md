# POC

```bash
npm start
```

## Containers examples

```bash
docker run -d --rm --label 'traefik.http.routers.server1.rule=Host(`server1.local`)' -p 8090:80 httpd
docker run -d --rm --label 'traefik.http.routers.server2.rule=Host(`server2.local`)' -p 8091:80 httpd
```
