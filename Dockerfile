# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install CodeClimate CLI
RUN curl -L https://github.com/codeclimate/test-reporter/releases/download/0.11.4/test-reporter-linux-amd64 > /usr/local/bin/cc-test-reporter
RUN chmod +x /usr/local/bin/cc-test-reporter

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
