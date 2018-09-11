# root is decided by bash (usually the folder in which you run bash from)

# save locally used file
cp -rf ./.storybook/manager-head.html ./deploy/manager-head-local.html
# replace file with one used for gh-pages deployment
cp -rf ./deploy/manager-head-gh.html ./.storybook/manager-head.html