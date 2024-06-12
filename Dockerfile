FROM mcr.microsoft.com/devcontainers/base:ubuntu-20.04

RUN apt-get update && apt-get install -y git

ADD . /workspace

EXPOSE 27017

