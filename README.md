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

- Light mode maps to Codex bright chrome: background/surface `#ffffff`, primary text `#0d0d0d`, secondary text `60%` black, tertiary text `29%` black, borders `5%` black.
- Editor, Agent, project panel, tabs, and terminal all use the same Codex white conversation surface in light mode.
- Terminal follows Codex code sizing: `.SF Mono`, size `12`, white background, black foreground.
- Light mode keeps crisp, text-free line icons and hides minimap, wrap guides, whitespace markers, and heavy pane dimming.
- Dark mode stays high-contrast black with glass-like panels and neon signal icons.
- UI font: `.SystemUIFont`, weight `400`, size `14`
- Editor/Agent code font: `.SF Mono`, weight `400`, size `12`
- Chinese fallback fonts: `PingFang SC`, `Hiragino Sans GB`, `STHeiti`
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
