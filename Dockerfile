FROM node:18.19.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY dataText.js ./dataText.js
COPY jsconfig.json ./jsconfig.json
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js

COPY public ./public
COPY services ./services
COPY src ./src


EXPOSE 3000

CMD [ "npm", "run", "dev" ]