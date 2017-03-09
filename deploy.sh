#!/bin/sh

rm -rf target
mkdir target

lein clean
lein cljsbuild once prod

mv resources/public/ target/
lein clean
git checkout master
git add --all
git commit -m "deployed build target"
git push origin master
