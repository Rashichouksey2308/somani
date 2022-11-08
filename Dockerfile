FROM node
 
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
# Installing dependencies
COPY package*.json /usr/src/app/

# Copying source files
COPY . /usr/src/app

RUN npm install
 
RUN npm run build
 
# Building app
EXPOSE 3010
 
# Running the app
CMD "npm" "start"
