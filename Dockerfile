FROM node:20.16.0-slim

WORKDIR /app

COPY . .

RUN npm install 

CMD ["npm", "run", "dev"]

