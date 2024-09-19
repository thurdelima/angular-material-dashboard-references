# Use an official Node.js v20 image to build the Angular app
FROM node:20.11.1 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the Angular app
RUN npm run build

# Use an Nginx image to serve the app
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to Nginx html directory
COPY --from=build /app/dist/angular-material-simple-admin-reference/browser /usr/share/nginx/html

# Fix permissions for the Angular app build output
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
