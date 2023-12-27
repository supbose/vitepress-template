#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
dist_path=packages/docs/docs/.vitepress/dist/ # 打包生成的文件夹路径
# 进入生成的文件夹
cd $dist_path
ls

date_time=`date +"%Y%m%d%H%M"`

echo "${date_time}" > GithubPages
