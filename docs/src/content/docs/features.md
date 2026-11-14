---
title: Features and the safety floor
description: What Marchy gives you — Hyprland on Arch Linux, Okonomi and Okimari presets, a hard safety floor, and a desktop that assumes a coding agent is running beside you.
---

# Features and the safety floor

Marchy is an [Arch Linux](https://archlinux.org) desktop built on the [Hyprland](https://hyprland.org) compositor. Here is what that means in practice.

## The desktop

- **Hyprland** — Wayland tiling window manager. Animated, keyboard-driven, and scriptable.
- **Quickshell** — the shell toolkit the bar, widgets, launcher, and notification daemon are drawn with.
- **Kitty** — the terminal. GPU-rendered, with ligatures and per-shell configuration.
- **PipeWire and WirePlumber** — one sound stack for everything, with per-application routing.
- **A modern portal stack** — `xdg-desktop-portal-hyprland`, so screen sharing, clipboard, and file pickers behave.

## Choice: Okonomi

The installer asks; it does not decide for you.

- No pre-selected browser, office suite, AI tool, or desktop style.
- Every choice can be changed later.
- Every option documents what it changes and how to undo it.

## Presets: Okimari

For people who want a known-good setup instead of a questionnaire, Marchy ships four fixed courses.

| Course | For | Shape |
|---|---|---|
| Nami | minimal | base system, browser, terminal |
| Jo | development | Nami + dev tools, containers, editors |
| Tokujo | full | Jo + media, office, AI, extras |
| Hardened | security | minimal + strict defaults and verification |

Presets are previewable and reversible. They are a starting point, not a lock-in.

## The safety floor

Some things are not taste. These stay on by default:

- firewall active, default deny
- full-disk encryption
- signed packages
- no passwordless sudo
- no telemetry

Advanced users can change safety settings only through an explicit path with warnings. The default is safe.

## Built for the age of agents

Marchy assumes a coding agent is running on the same machine as you.

- A terminal that is fast to type into and easy to read from a transcript.
- Window management that is scriptable, so an agent can place a window exactly where it belongs.
- No background telemetry, so nothing about your machine leaves it by default.
- A sane, conventional base — Arch Linux with `pacman` and the AUR — so an agent can install what it needs without fighting the platform.

## Base system

- Arch Linux, rolling release, `pacman` with the AUR.
- systemd as init and service manager.
- The Linux kernel, with `linux-firmware` preinstalled.
- Wayland only. X11 is not part of the target.

Upstream projects and their licences are listed in [Upstream projects](./upstream/).
