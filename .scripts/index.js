const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const CloudBase = require("@cloudbase/manager-node");

const rootPath = path.join(__dirname, "..");

// 打包文件
async function packZipFiles() {
  // 读取需要上传的文件
  const files = fs
    .readdirSync(path.join(__dirname, ".."))
    .filter(
      (item) =>
        !item.match(/^\./) &&
        fs.statSync(path.join(rootPath, item)).isDirectory()
    );

  const promises = files.map(async (item) => {
    const output = fs.createWriteStream(
      path.join(rootPath, ".zip-files", `${item}.zip`)
    );

    const archive = archiver("zip");

    return new Promise((resolve, reject) => {
      output.on("close", () => {
        console.log("close");
        resolve();
      });

      archive.on("error", function (err) {
        console.log(err);
        reject(err);
      });

      archive.pipe(output);
      archive.directory(path.join(rootPath, item), item);
      archive.finalize();
    });
  });
  console.log("begin");
  await Promise.all(promises);
  console.log("done");
}

// 上传压缩包文件
async function uploadZipFiles() {
  const app = CloudBase.init({
    secretId: process.env.SecretId,
    secretKey: process.env.SecretKey,
    envId: "tcli",
  });

  try {
    await app.storage.uploadDirectory({
      localPath: path.resolve(rootPath, ".zip-files"),
      cloudPath: "cloudbase-templates",
      // 忽略 . 开头的文件
      ignore: [".*"],
    });
    console.log("上传文件成功！");
  } catch (error) {
    console.log(error);
  }
}

packZipFiles().then(() => {
  uploadZipFiles();
});
