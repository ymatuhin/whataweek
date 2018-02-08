#!/bin/bash
rm -rf dist
mkdir dist
mkdir dist
echo "dist folder reset"

HTML_FILE_NAME="index.html"
CSS_FILE_NAME="index.css"

npx html-minifier --collapse-whitespace ./src/$HTML_FILE_NAME -o dist/$HTML_FILE_NAME
echo "$HTML_FILE_NAME minified"

npx postcss ./src/$CSS_FILE_NAME > ./dist/$CSS_FILE_NAME
echo "$CSS_FILE_NAME minified"

npx webpack --mode production
echo "Minification complete"

cp -r ./static/* ./dist
echo "Static copied"
