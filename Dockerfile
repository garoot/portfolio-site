# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install eslint-plugin-jest
RUN npm install eslint-plugin-jest@latest --save-dev

# Copy the rest of the application code
COPY . .

# Run ESLint
RUN npx eslint . --ext .js,.jsx,.ts,.tsx

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

