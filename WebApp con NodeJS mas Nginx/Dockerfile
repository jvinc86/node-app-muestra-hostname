FROM node:10

WORKDIR /usr/src/app

COPY App-NodeJS/package.json ./

RUN npm install

COPY App-NodeJS/* ./

EXPOSE 3000

CMD [ "node", "server.js" ]