# zed_configs

Personal Zed configuration focused on a high-contrast, practical light/dark setup.

## Contents

- `themes/zed-codex-signal-theme.json`: local Zed theme pair.
  - `Codex Signal Light`
  - `Codex Signal Dark`
- `settings/zed-codex-signal-settings-overlay.json`: reusable theme, icon, and font settings overlay.
- `scripts/install.mjs`: installs the theme and merges the overlay into `~/.config/zed/settings.json`.

## Style

- Light mode uses a softer Codex-like palette for long sessions: background `#f7f7f4`, primary text `#242426`, secondary text `#6e6f73`, placeholder text `#9a9ba0`, border `#dededa`.
- Light row states avoid glare: hover `#ecece8`, selected/active `#e3e1dd`.
- Dark mode avoids pure black and pure white: background `#0b0c0e`, raised surface `#151619`, border `#2a2d31`, primary text `#d8d8da`, secondary text `#a4a6aa`.
- UI and Agent font: `.SystemUIFont`, weight `400`, size `15`.
- Editor code font: `SF Mono`, weight `400`, size `14`, with `calt` and `liga` disabled for crisper rendering.
- Terminal follows Codex code sizing with a little more readability: `SF Mono`, size `13`, matching the active theme background/foreground.
- Chinese fallback fonts: `PingFang SC`, `Hiragino Sans GB`, `STHeiti`
- Icon themes:
  - `VSCode Icons for Zed (Light)`
  - `VSCode Icons for Zed (Dark)`

Requires the Zed extension `vscode-icons` to be installed.

## Install

```bash
node scripts/install.mjs
```

The installer creates a timestamped backup of your existing Zed settings before writing:

```text
~/.config/zed/settings.json.zed-configs-backup-*
```

## Notes

This repo intentionally stores a small theme-only overlay instead of a full `settings.json`.
Full local settings often contain machine-specific paths, SSH hosts, private workspaces, and agent configuration.
