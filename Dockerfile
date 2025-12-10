FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod


FROM nginx:stable-alpine

ARG API_URL
ENV API_URL=${API_URL}

COPY --from=build /app/dist/angular-conduit /usr/share/nginx/html

RUN sed -i "s|https://api.realworld.io/api|${API_URL}|g" /usr/share/nginx/html/main.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
