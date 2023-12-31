FROM node:latest AS build

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json .

# Install packages
RUN npm install

# Copy all files
COPY . .

# Run build command for react
RUN npm run build

# Nginx
FROM nginx:stable

# Copy config nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Change work directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]