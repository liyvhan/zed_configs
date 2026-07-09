# zed_configs

Personal Zed configuration focused on a high-contrast, practical light/dark setup.

## Contents

- `themes/zed-codex-signal-theme.json`: local Zed theme pair.
  - `Codex Signal Light`
  - `Codex Signal Dark`
- `settings/zed-codex-signal-settings-overlay.json`: reusable theme, icon, and font settings overlay.
- `scripts/install.mjs`: installs the theme and merges the overlay into `~/.config/zed/settings.json`.

## Style

- Light mode maps to Codex bright chrome: panels/editor/preview/terminal `#ffffff`, primary text `#0d0d0d`, secondary text `60%` black, tertiary text `29%` black.
- Left-thread emphasis uses Codex glass-like row states: hover `#d6d6da66`, selected/active `#d6d6da99`.
- Editor and Agent text use Codex conversation sizing; terminal stays at Codex code sizing.
- Terminal follows Codex code sizing: `.SF Mono`, size `12`, white background, black foreground.
- Dark mode stays high-contrast black with glass-like panels.
- UI font: `.SystemUIFont`, weight `400`, size `14`
- Editor/Agent code font: `.SF Mono`, weight `400`, size `14`
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
