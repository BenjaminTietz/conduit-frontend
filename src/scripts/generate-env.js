const fs = require("fs");

const apiUrl = process.env.BACKEND_API_URL;

if (!apiUrl) {
  console.error("BACKEND_API_URL is not defined");
  process.exit(1);
}

const targetFile = "src/environments/environment.ts";

const content = `export const environment = {
  apiUrl: "${apiUrl}",
};
`;

fs.writeFileSync(targetFile, content, { encoding: "utf8" });

console.log("environment.ts generated with apiUrl:", apiUrl);


