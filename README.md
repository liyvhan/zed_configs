# zed_configs

Personal Zed configuration focused on a high-contrast, practical light/dark setup.

## Contents

- `themes/zed-codex-signal-theme.json`: local Zed theme pair.
  - `Codex Signal Clean Light`
  - `Codex Signal Dark`
- `settings/zed-codex-signal-settings-overlay.json`: reusable UI/editor settings overlay.
- `scripts/install.mjs`: installs the theme and merges the overlay into `~/.config/zed/settings.json`.

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
