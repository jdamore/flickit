rm -f bundle.js
kill -9 `ps aux | grep webpack-dev-server | grep 8090 | awk '{print $2}'`
nvm use 5.0
npm install
npm run build
npm test
npm run dev &
npm run feature
kill -9 `ps aux | grep webpack-dev-server | grep 8090 | awk '{print $2}'`