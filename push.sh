npm run git-info
npm run build
rm -rf ../amaljose96.github.io/*
cp -R build/* ../amaljose96.github.io/
cd ../amaljose96.github.io
git add .
git commit 
git push