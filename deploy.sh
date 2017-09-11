#!/bin/sh

rm -rf .build
mkdir .build

webpack -p

cp -r resources/public/* .build/
git checkout master
cp -R .build/* .
git add --all
git commit -m "deployed release candidate"
git push origin master
