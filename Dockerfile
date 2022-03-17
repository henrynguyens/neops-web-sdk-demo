FROM node:16 AS builder

# Set the Current Working Directory inside the container
WORKDIR app

RUN apt-get update && apt-get install chromium libpng-dev rsync -y
RUN npm install -g pngquant
# Copy everything from the current directory to the PWD (Present Working Directory) inside the container
COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

RUN npm install

ENV PATH="./node_modules/.bin:${PATH}"
ENV CHROME_BIN=chromium

ARG NEOPS_VERSION
ENV NEOPS_VERSION ${NEOPS_VERSION:-develop}

# RUN sed -i "s|version_undefined|${NEOPS_VERSION}|g" ./src/app/version.ts
# RUN ng test --browser=ChromeHeadlessCI --code-coverage=true --single-run=true
# RUN ng test --browsers=ChromeHeadlessNoSanbox --code-coverage=true --watch=false

RUN sed -i "s|version_undefined|${NEOPS_VERSION}|g" ./src/app/version.ts
#RUN sed -i "s|version_undefined|${NEOPS_VERSION}|g" ./package.json

#FROM builder AS builder-test
#
#RUN ng build --configuration=test
# RUN ng build --configuration=production
# RUN ng build --configuration=integration

FROM builder AS builder-production

#RUN ng build ngx-neops-graphql --configuration=production
RUN ng build --configuration=production

FROM nginx:1.19

# html5Mode configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=builder-test /app/dist/neops/test /app/dist/neops/test
COPY --from=builder-production /app/dist/neops-web-sdk /app/dist/neops/prod

COPY neops-docker-entrypoint.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/neops-docker-entrypoint.sh

