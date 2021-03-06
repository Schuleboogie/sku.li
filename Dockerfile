FROM node:boron

WORKDIR /usr/src/app

COPY . .

RUN npm install --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
