---
title: Features and the safety floor
description: What Marchy gives you — Okonomi and Okimari presets, a hard safety floor, and a desktop that assumes a coding agent is running beside you.
---

# Features and the safety floor

## The desktop

- **A tiling window manager** — animated, keyboard-driven, and scriptable from the shell.
- **A rebuildable shell** — the bar, widgets, launcher, notification daemon and lock screen are configuration, not code.
- **A fast terminal** — GPU-rendered, with ligatures and per-shell configuration.
- **One sound stack** — with per-application routing and no system-wide daemon you have to babysit.
- **A modern portal stack** — so screen sharing, clipboard and file pickers behave.

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
- no passwordless privilege escalation
- no telemetry

Advanced users can change safety settings only through an explicit path that warns first. The default is safe.

## Built for the age of agents

Marchy assumes a coding agent is running on the same machine as you.

- A terminal that is fast to type into and easy to read from a transcript.
- Window management that is scriptable, so an agent can place a window exactly where it belongs.
- No background telemetry, so nothing about your machine leaves it by default.
- **Sandboxes with rollback** — an agent can work inside an isolated environment snapshotted before it starts and discarded after, so a bad run costs nothing.

## Base system

- A coherent base: kernel, userland and documentation developed together.
- Snapshots and boot environments, so a bad update is a reboot away.
- Isolated environments for agents and untrusted work.
- A single package manager with verified signatures.

Component licences are listed in [third-party licenses](https://github.com/IamFILINT/marchy-public/blob/main/website/THIRD-PARTY-LICENSES.md).
