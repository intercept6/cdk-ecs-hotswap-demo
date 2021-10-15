FROM node:16.11.1-alpine3.14

WORKDIR /usr/src/app

# Install tini
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# Install my app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run compile

CMD ["npm", "start"]
