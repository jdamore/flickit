rm -rf node_modules
nvm use 5.0
npm install
npm run build
npm test
npm run dev &
npm run feature
npm run pact-mock-service start &
npm run pacts
npm run pact-mock-service stop
rm -f bundle.js