FROM node:20.17-alpine3.19

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]