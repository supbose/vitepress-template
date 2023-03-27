#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd packages/docs/docs/.vitepress/dist

# deploy to github pages
echo 'vitepress.panxie.cc' > CNAME

if [ -z "$SUPBOSE_VITEPRESS" ]; then
  msg='deploy'
  githubUrl=git@github.com:supbose/vitepress-template.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://supbose:${SUPBOSE_VITEPRESS}@github.com/vitepress-template.git
  git config --global user.name "supbose"
  git config --global user.email "yshxw@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl mian:gh-pages # 推送到github gh-pages分支
