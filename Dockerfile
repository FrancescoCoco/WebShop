FROM nginx:alpine
# store is where we have originally project 
COPY /dist/store /usr/share/nginx/html
