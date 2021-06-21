FROM node:alpine
WORKDIR /client
COPY . .
RUN npm install
RUN npm install -g @angular/cli
CMD ["ng","serve","--host","0.0.0.0"]