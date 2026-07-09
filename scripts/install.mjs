import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const themeSource = path.join(repoRoot, "themes", "zed-codex-signal-theme.json");
const overlaySource = path.join(repoRoot, "settings", "zed-codex-signal-settings-overlay.json");
const zedDir = path.join(os.homedir(), ".config", "zed");
const themesDir = path.join(zedDir, "themes");
const settingsPath = path.join(zedDir, "settings.json");
const installedThemePath = path.join(themesDir, "zed-codex-signal-theme.json");

function stripJsonc(input) {
  let output = "";
  let inString = false;
  let quote = "";
  let escaping = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (inLineComment) {
      if (char === "\n") {
        inLineComment = false;
        output += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        i += 1;
      } else if (char === "\n") {
        output += "\n";
      }
      continue;
    }

    if (inString) {
      output += char;
      if (escaping) {
        escaping = false;
      } else if (char === "\\") {
        escaping = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      output += char;
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      i += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      inBlockComment = true;
      i += 1;
      continue;
    }

    output += char;
  }

  return output.replace(/,\s*([}\]])/g, "$1");
}

function readJsonc(filePath) {
  return JSON.parse(stripJsonc(fs.readFileSync(filePath, "utf8")));
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, overlay) {
  const result = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (isPlainObject(value) && isPlainObject(result[key])) {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

fs.mkdirSync(themesDir, { recursive: true });
fs.copyFileSync(themeSource, installedThemePath);

const settings = fs.existsSync(settingsPath) ? readJsonc(settingsPath) : {};
const overlay = JSON.parse(fs.readFileSync(overlaySource, "utf8"));
const merged = deepMerge(settings, overlay);

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
if (fs.existsSync(settingsPath)) {
  fs.copyFileSync(settingsPath, `${settingsPath}.zed-configs-backup-${stamp}`);
}

fs.writeFileSync(
  settingsPath,
  `${JSON.stringify(merged, null, 2)}\n`,
);

console.log(`Installed theme: ${installedThemePath}`);
console.log(`Updated settings: ${settingsPath}`);
console.log(`Selected themes: ${merged.theme.light} / ${merged.theme.dark}`);
