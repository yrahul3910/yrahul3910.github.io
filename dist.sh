#!/bin/sh
rm -rf dist/
mkdir dist/
cp src/404.html src/profile.jpg src/ghspa.js dist/
npm run deploy
