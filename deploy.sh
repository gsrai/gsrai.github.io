#!/bin/sh

# create a brand new .build directory
rm -rf .build
mkdir .build
# clean and build
npm run build
# copy dist to build
cp -r dist/* .build/
# copy build artifacts to master and commit to deploy 
git checkout master
cp -R .build/* .
git add --all
git commit -m "deployed release candidate"
git push origin master
