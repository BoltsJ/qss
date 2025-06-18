import process from "node:child_process";
import fs from "node:fs/promises";
import manifestJson from "../src/manifest.json";
import pkgJson from "../package.json";

manifestJson.version = pkgJson.version;
const output = JSON.stringify(manifestJson, undefined, 2);
await fs.writeFile("src/manifest.json", output);
process.execSync("git add manifest.json");
