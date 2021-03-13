FROM node:14

WORKDIR /usr/src/app

RUN git clone https://github.com/2cluster/eth-allowance-explorer.git

WORKDIR /usr/src/app/eth-allowance-explorer

RUN npm install

RUN npm build

EXPOSE 5000

CMD [ "node", "server/index.js" ]