rm -rf node_modules
nvm use 5.0
npm install
npm run build
npm test
rm -f bundle.js