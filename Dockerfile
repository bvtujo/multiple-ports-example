FROM node:16-alpine3.16

COPY index.js .
COPY index.html .
COPY package.json .
RUN npm install 

CMD node index.js 

EXPOSE 8080 5050

