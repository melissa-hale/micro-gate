# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port that Express Gateway will listen on (adjust if necessary)
EXPOSE 8080

# Start Express Gateway when the container starts
CMD ["npm", "run", "start"]