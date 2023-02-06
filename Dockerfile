FROM node:16-bullseye-slim
WORKDIR /usr/src/app

COPY . .

RUN npm install
ENTRYPOINT [ "npm", "start"]
EXPOSE 3000