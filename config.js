const replace = require("replace-in-file");

module.exports = {
  // 根據您的項目需要修改文件位置
  files: "./out/_next/static/css/*.css",
  from: [
    "/fonts/FakePearl-ExtraLight.ttf",
    "/fonts/FakePearl-Light.ttf",
    "/fonts/FakePearl-Regular.ttf",
    "/fonts/FakePearl-Medium.ttf",
    "/fonts/FakePearl-SemiBold.ttf",
  ],
  to: [
    "../../../fonts/FakePearl-ExtraLight.ttf",
    "../../../fonts/FakePearl-Light.ttf",
    "../../../fonts/FakePearl-Regular.ttf",
    "../../../fonts/FakePearl-Medium.ttf",
    "../../../fonts/FakePearl-SemiBold.ttf",
  ],
};

// (async function () {
//   try {
//     const results = await replace(options);
//     console.log("Replacement results:", results);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   }
// })();
