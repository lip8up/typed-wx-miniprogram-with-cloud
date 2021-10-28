mv ../cloudfunctions/airead/node_modules ../cloudfunctions/
mv ../cloudfunctions/airead/yarn.lock ../cloudfunctions/
yarn clean
npx tsc -p tsconfig-build.json
cp -f package.json ../cloudfunctions/airead/
mv ../cloudfunctions/node_modules ../cloudfunctions/airead/
mv ../cloudfunctions/yarn.lock ../cloudfunctions/airead/
yarn localdev
