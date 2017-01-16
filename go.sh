unittest() {
	nvm install 5.0
	nvm use 5.0
	rm -rf node_modules
	npm install
	npm run test
}

buildanddeploytos3() {
	nvm install 5.0
	nvm use 5.0
	rm -rf node_modules
	npm install
	npm run build
	aws s3 cp index.html s3://flipit.corsamore.com --acl public-read --region us-east-1
	aws s3 cp ./bundle.js s3://flipit.corsamore.com --acl public-read --region us-east-1
	aws s3 cp ./style.css s3://flipit.corsamore.com --acl public-read --region us-east-1
	aws s3 sync images/ s3://flipit.corsamore.com/images/ --acl public-read --region us-east-1 --delete
}

buildanddeploytoghpages() {
	nvm install 5.0
	nvm use 5.0
	rm -rf node_modules
	npm install
	npm run build
	git checkout gh-pages
	git merge master
	git checkout .gitignore
	git add index.html
	git add bundle.js
	git add style.css
	git commit -m "New changes from CI build" --allow-empty
	git push origin gh-pages
}


feature() {
	nvm install 5.0
	nvm use 5.0
	rm -rf node_modules
	npm install
	npm run feature
}

