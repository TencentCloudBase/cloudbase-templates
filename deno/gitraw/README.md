# 说明

gitraw 目录是用于通过 import_map.json 代理 import 到 `https://raw.githubusercontent.com` 的地址。

腾讯云环境在执行 deno 打包时，`https://raw.githubusercontent.com` 地址的文件，经常加载 404，导致打包失败。

因此添加这个映射来提升打包成功率。
