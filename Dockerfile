FROM node:alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm i
CMD npm run start


