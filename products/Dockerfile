# base image
FROM node:12.2.0


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

RUN chmod 777 -R /app

EXPOSE 8080

# start app
CMD ng serve --open --host 0.0.0.0 --port 8080 --disable-host-check

