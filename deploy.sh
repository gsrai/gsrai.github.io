#!/bin/sh

rm -rf .build
mkdir .build

lein clean
lein deps
lein cljsbuild once prod

cp -r resources/public/* .build/
lein clean
git checkout master
cp -R .build/* .
git add --all
git commit -m "deployed release candidate"
git push origin master