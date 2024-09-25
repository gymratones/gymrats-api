# Dockerfile
FROM node:18.17.1

WORKDIR /app

RUN npm install -g @nestjs/cli typescript

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
