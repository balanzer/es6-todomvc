steps_notes

npm install // to install 

npm start  // to start 

http://localhost:8080/  - make sure page loaded 

NPM short cuts 
npm i -D <module>( i for install and -D for save dev)  
npm i -D webpack@beta  or 
npm i -D webpack



Add Web Pack dependency and add  "build:dev":"webpack" in script section

npm run build:dev  (when you run these you should see npm errors and webpack error)


npm run build:dev -s (Supress all NPM errors)

Add - webpack.config.babel.js  

Add webpack-validator dependency for cleaner error
npm i -D webpack-validator

now you should see friendly error messages

Adding watch mode for dynamic script changes
npm run build:dev -s -- --watch

or use webpack server
npm install webpack-dev-server --save-dev

add dev to script

and try npm run dev, now you dont need  npm run start


Minify

webpack -p enables prod mode 

devtool:'eval',
add devtool for chorme debug, for prod use source-maps

development vs prod