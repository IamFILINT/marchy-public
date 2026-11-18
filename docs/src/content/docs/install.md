---
title: Installing on your hardware
description: How to install Marchy — and what the Marchy installer will do for you when it lands.
---

# Installing on your hardware

Marchy is currently at **v0.1.0**: the documentation, the website, and the design of the desktop are public; the Marchy installer is still being built. This page covers the manual path today and what the installer will take over later.

## Requirements

- 64-bit x86_64 hardware (arm64 on request)
- 8 GB RAM or more
- 40 GB free disk space
- UEFI with Secure Boot support
- A 2 GB or larger USB stick

## Today: the manual path

Write the Marchy image to a USB stick, boot it, and follow the on-screen steps. The image carries the desktop, the shell, the terminal and the safety floor; you choose the account, the hostname and the disk.

Marchy encrypts the disk by default. Keep the recovery key somewhere safe — if you lose it, the data is gone.

Once you are in, open a terminal and check the state of the machine:

```sh
marchy doctor
```

`marchy doctor` reports the safety floor, the desktop session, and anything it thinks you should look at.

## What the installer will do

The Marchy installer turns the manual path into a questionnaire and a script:

- **Okonomi** asks which browser, terminal, editor, AI tools, desktop style and keybinds you want — and installs exactly those, skipping the rest.
- **Okimari** installs a whole preset instead: Nami, Jo, Tokujo, or Hardened.
- Either way it sets up the safety floor — firewall, full-disk encryption, signed packages, no passwordless privilege escalation, no telemetry — before it hands you a working session.

Nothing in the installer is irreversible: every choice is recorded and can be changed later.

## Presets

| Course | For | Shape |
|---|---|---|
| Nami | minimal | base system, browser, terminal |
| Jo | development | Nami + dev tools, containers, editors |
| Tokujo | full | Jo + media, office, AI, extras |
| Hardened | security | minimal + strict defaults and verification |

## Follow along

Public progress is tracked through [Marchy on GitHub](https://github.com/IamFILINT/marchy-public) and the [v0.1.0 release](https://github.com/IamFILINT/marchy-public/releases).
