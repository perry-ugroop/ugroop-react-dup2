FROM nginx
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

# Copy source files
WORKDIR /home/ugroop_react
ADD app/ app/
ADD internals/ internals/
ADD server/ server/
ADD package.json .
EXPOSE 8080

#Following step is for React-boilerplate project.
RUN npm cache clean
RUN npm install
RUN npm run build:dll
