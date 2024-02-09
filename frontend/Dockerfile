FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src .

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
