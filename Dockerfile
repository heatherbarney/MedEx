FROM node:14.17.1
RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]



