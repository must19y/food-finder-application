FROM alpine:3.15.4

RUN apk update
RUN apk add --no-cache git
RUN apk add --no-cache docker
RUN apk add --no-cache docker-compose

ADD . /workspace

EXPOSE 27017
