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
ADD font-awesome/ font-awesome/
ADD mocks/ mocks/
ADD package.json .
COPY .gitignore .
COPY .gitattributes .
COPY express-stormpath-ugroopextension-3.1.6.tgz .
COPY stormpath.yml .
#Following step is for React-boilerplate project.
RUN ls -a
RUN npm cache clean
RUN npm install
RUN npm install express-stormpath-ugroopextension-3.1.6.tgz
RUN npm run build:dll
RUN npm run build
CMD ["npm", "run", "start:prod"]

