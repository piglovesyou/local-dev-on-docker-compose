FROM node:16

WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 9229
EXPOSE 3000
CMD [ "npm", "start" ]