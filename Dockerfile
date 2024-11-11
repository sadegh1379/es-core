FROM node:20-alpine3.17
RUN apk update && apk upgrade 
WORKDIR /app
COPY package*.json .
COPY yarn.lock .
RUN yarn
COPY . .
CMD ["yarn", "storybook"]
EXPOSE 6006