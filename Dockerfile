# Build stage: Build the React app
FROM --platform=linux/amd64 node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Serve stage: Use Nginx to serve the built React app
FROM nginx:alpine

# Copy built files from the previous stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
