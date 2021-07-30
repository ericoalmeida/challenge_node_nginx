FROM node:14.17

WORKDIR /app

COPY . /app

RUN rm -rf dist && \
  npm install && \
  npx tsc

ENTRYPOINT [ "./bin/docker-entrypoint.sh" ]