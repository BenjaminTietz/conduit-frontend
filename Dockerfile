# Build Stage
FROM node:20-alpine as builder

WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

# Production Stage
FROM nginx:alpine

COPY --from=builder /app/dist/angular-conduit /usr/share/nginx/html

EXPOSE 80
