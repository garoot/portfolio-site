# Use an official Node runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies (including both dependencies and devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Run ESLint
RUN echo "Running ESLint..." && npx eslint . --ext .js,.jsx,.ts,.tsx && echo "ESLint completed."

# Build the application
RUN npm run build

# Use a smaller base image for the production stage
FROM node:18-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built files from the previous stage
COPY --from=build /app ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]


# # Use an official Node runtime as a parent image
# FROM node:18-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies (including both dependencies and devDependencies)
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Use a smaller base image for the production stage
# FROM node:18-alpine AS production

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package.json package-lock.json ./

# # Install only production dependencies
# RUN npm install --only=production

# # Copy built files from the previous stage
# COPY --from=build /app ./

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "start"]


# # Use an official Node runtime as a parent image
# FROM node:18-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Copy the .env file
# COPY .env ./

# # Build the application
# RUN npm run build

# # Use a smaller base image for the production stage
# FROM node:18-alpine AS production

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package.json package-lock.json ./

# # Install only production dependencies
# RUN npm install --only=production

# # Copy built files from the previous stage
# COPY --from=build /app ./

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "start"]


# # Use an official Node runtime as a parent image
# FROM node:18

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json ./

# # Install dependencies
# RUN npm install

# # Install eslint-plugin-jest
# RUN npm install eslint-plugin-jest@latest --save-dev

# # Copy the rest of the application code
# COPY . .

# # Run ESLint
# RUN npx eslint . --ext .js,.jsx,.ts,.tsx

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "start"]

