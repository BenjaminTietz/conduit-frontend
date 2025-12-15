const fs = require("fs");
const path = require("path");

const apiUrl = process.env.BACKEND_API_URL;

if (!apiUrl) {
  console.error("BACKEND_API_URL is not defined");
  process.exit(1);
}


const targetDir = path.join(__dirname, "../environments");
const targetFile = path.join(targetDir, "environment.prod.ts");


fs.mkdirSync(targetDir, { recursive: true });

const content = `export const environment = {
  production: true,
  apiUrl: "${apiUrl}",
};
`;

fs.writeFileSync(targetFile, content, { encoding: "utf8" });

console.log("environment.prod.ts generated with apiUrl:", apiUrl);


