FROM mcr.microsoft.com/playwright:v1.43.0-jammy

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "playwright", "test"]
