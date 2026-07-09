# zed_configs

Personal Zed configuration focused on a high-contrast, practical light/dark setup.

## Contents

- `themes/zed-codex-signal-theme.json`: local Zed theme pair.
  - `Codex Signal Light`
  - `Codex Signal Dark`
- `settings/zed-codex-signal-settings-overlay.json`: reusable UI/editor settings overlay.
- `icon-theme-extension/`: local `Codex Signal Tech Icons` Zed icon theme extension.
- `scripts/install.mjs`: installs the theme and merges the overlay into `~/.config/zed/settings.json`.

## Style

- Light mode follows Codex bright chrome: white surface, `#0d0d0d` ink, and very light black-alpha borders.
- Dark mode stays high-contrast black with glass-like panels and colored signal accents.
- Accent colors are reserved for syntax, focus states, diagnostics, and icons.
- UI font: `.SystemUIFont`, weight `400`, size `14`
- Editor font: `.SF Mono`, weight `400`, size `13`
- Terminal font: `.SF Mono`, size `12`
- Chinese fallback fonts: `Hiragino Sans GB`, `STHeiti`
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
