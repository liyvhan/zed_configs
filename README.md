# zed_configs

Personal Zed configuration focused on a high-contrast, practical light/dark setup.

## Contents

- `themes/zed-codex-signal-theme.json`: local Zed theme pair.
  - `Codex Signal Prism Light`
  - `Codex Signal Dark`
- `settings/zed-codex-signal-settings-overlay.json`: reusable UI/editor settings overlay.
- `icon-theme-extension/`: local `Codex Signal Tech Icons` Zed icon theme extension.
- `scripts/install.mjs`: installs the theme and merges the overlay into `~/.config/zed/settings.json`.

## Style

- Base contrast: black text on white in light mode, white text on black in dark mode.
- Accent colors are reserved for syntax, focus states, diagnostics, and icons.
- Editor/terminal font: `.SF Mono`, weight `600`
- UI font: `.SystemUIFont`, weight `500`
- Icon themes:
  - `Codex Signal Tech Icons Light`
  - `Codex Signal Tech Icons Dark`

## Install

```bash
node scripts/install.mjs
```

The installer creates a timestamped backup of your existing Zed settings before writing:

```text
~/.config/zed/settings.json.zed-configs-backup-*
```

## Notes

This repo intentionally stores a reusable overlay instead of a full `settings.json`.
Full local settings often contain machine-specific paths, SSH hosts, private workspaces, and agent configuration.
