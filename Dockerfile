FROM nginx:1.13.12-alpine
COPY dist/cookie-store /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
