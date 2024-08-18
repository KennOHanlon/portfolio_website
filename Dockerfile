# syntax=docker/dockerfile:1

# Step 1: Build the React app
FROM node:16.14.2 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the app with a lightweight server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]