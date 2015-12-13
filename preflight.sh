rm -rf node_modules
nvm use 5.0
npm install
npm test
npm run build
rm -f bundle.js