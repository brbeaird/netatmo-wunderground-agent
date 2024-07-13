FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1