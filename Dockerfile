FROM node:lts-alpine as build-stage

  # install aurelia-cli to build the ecom & http-server to serve static contents
RUN npm i -g http-server
RUN npm i -g aurelia-cli

  # set working directory to ecom
  # henceforth all commands will run inside this folder
WORKDIR /ecom

  # copy package.json related files first and install all required dependencies
COPY package*.json ./
RUN npm install

  # copy the rest of files and folders & install dependencies
COPY . ./
RUN npm run build

  # use nginx as the http server to serve contents
FROM nginx:alpine as production-stage

## Copy our default deploy config
COPY deploy/nginx/* /etc/nginx/conf.d/

## Remove default deploy website
SHELL ["/bin/bash", "-c", "rm -rf /usr/share/nginx/html/"]

WORKDIR /usr/share/nginx/html
  # copy files from previous container/stage into the new one
  # from /ecom/dist to working directory
COPY --from=build-stage /app/dist ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
