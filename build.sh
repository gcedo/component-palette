#!/bin/bash

SSH_KEY=${1:-/root/.ssh/id_rsa_deploy}
HOST_IP=$(ip route get 1 | awk '{print $NF;exit}')
SINOPIA_URL="http://${HOST_IP}:4873"

exec docker run \
    -v "${SSH_KEY}":/root/.ssh/id_rsa \
    -v $(pwd):/code \
    mhart/alpine-node \
    /bin/sh -c "\
        cd /code && \
        (curl -I ${SINOPIA_URL} --max-time 5 && npm set registry ${SINOPIA_URL} && echo \"Using sinopia cache registry available on ${SINOPIA_URL}\" || true) && \
        NPM_TOKEN=${NPM_TOKEN} npm i && \
        SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} npm t && \
        { [[ \"$(git rev-parse --abbrev-ref HEAD)\" == \"master\" ]] && npm run pages; } \
    ";

