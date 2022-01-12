#stage 0 
FROM node:14 as node
WORKDIR /app
COPY ./ ./app
RUN npm install
Run npm run build -- --prod

#stage 1
FROM nginx:alpine
COPY --from=node /app/dist/CET /usr/share/nginx/html

