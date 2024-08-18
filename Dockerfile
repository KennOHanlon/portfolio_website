# Use the full version of node 16 image as base
FROM node:16.14.2 as build

# Create a directory for our application in the container 
RUN mkdir -p /usr/src/app

# Set this new directory as our working directory for subsequent instructions
WORKDIR /usr/src/app

# Copy all files in the current directory into the container
COPY . .

# Set the environment variable for the application's port
# (Be sure to replace '4200' with your application's specific port number if different)
ENV PORT=3000

# Install 'serve', a static file serving package globally in the container
RUN npm install -g serve

# Install all the node modules required by the React app
RUN npm install

# FROM node:alpine as main

# COPY --from=build /usr/src/app /

# Build the React app
RUN npm run build

EXPOSE 3000

# Serve the 'build' directory on port 4200 using 'serve'
CMD ["serve", "-s", "-l", "3000", "./build"]