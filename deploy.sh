#!/bin/sh

# clean and build
npm run build
# copy build artifacts to master and commit to deploy 
git checkout master
rm *.js
rm *.css
cp -R dist/* .
git add --all
git commit -m "deployed release candidate"
git push origin master
