#!/bin/sh
echo '-----------------------------------'
echo 'Installing packages'
echo '-----------------------------------'
yarn

echo '-----------------------------------'
echo 'Linting code'
echo '-----------------------------------'
npm run lint

echo '-----------------------------------'
echo 'Starting dev server'
echo '-----------------------------------'
npm start