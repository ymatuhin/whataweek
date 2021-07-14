import glob from "glob";
import path from "path";
import crypto from "crypto";
import critical from "critical";

const files = glob.sync("./dist/**/*.html");

files.forEach(async (filePath) => {
  const fileName = path.basename(filePath, ".html");
  const hash = crypto.randomBytes(4).toString("hex");

  await critical.generate({
    base: "./dist",
    src: filePath,
    width: 1300,
    height: 900,
    extract: false,
    inline: true,
    target: {
      html: `${fileName}.html`,
      uncritical: `${fileName}.${hash}.css`,
    },
  });
  console.log(`Critical CSS inlined: ${filePath}`);
});
