FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json ./
RUN npm cache clean --force npm install --no-package-lock
# Bundle app source
COPY . .
EXPOSE 4040
CMD ["npm",  "start"]
