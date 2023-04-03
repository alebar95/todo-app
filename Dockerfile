# Stage 1: Compile and Build angular codebase

FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

# Stage 2: Serve app with nginx server

FROM nginx:latest

# change default ngnix configuration file to avoid probelm of 404 page when refreshing
COPY ./default.conf /etc/nginx/conf.d

COPY --from=build /usr/local/app/dist/todo-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80
