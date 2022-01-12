FROM node:14 as builder
#set working directory
WORKDIR /app
#copy from current to working
COPY ./ ./app
#run npm install and build
RUN npm install
#Create nginx stage
RUN npm run build -- --prod
FROM nginx:alpine
COPY --from=node /app/dist/CET /usr/share/nginx/html


