npm i
source .envrc
pm2 delete 0
pm2 start dist/index.js