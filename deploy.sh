#!/bin/sh

rm -rf .build
mkdir .build

rm resources/public/js/main.min.js
webpack -p

cp -r resources/public/* .build/
rm resources/public/js/main.min.js
git checkout master
cp -R .build/* .
git add --all
git commit -m "deployed release candidate"
git push origin master
