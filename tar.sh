#!/bin/sh
# 删除原文件
rm -rf .zip-files
mkdir .zip-files
# 打包压缩所有文件夹
for dir in $(find * -maxdepth 0 -type d)
do
  name=${dir%*/}
  tar -cvf .zip-files/$name.tar.gz -C $dir .
done