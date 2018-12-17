#!/bin/sh
rm -rf dist/
mkdir dist/
cp src/404.html src/ghspa.js dist/
npm run deploy