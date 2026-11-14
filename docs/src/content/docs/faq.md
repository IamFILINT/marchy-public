---
title: Frequently asked questions
description: Answers about Marchy — an Arch Linux desktop built on Hyprland, with Okonomi, Okimari, a hard safety floor, and no telemetry.
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Marchy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Marchy is an independent, free and open source Arch Linux desktop created by FILINT. It is built on the Hyprland Wayland compositor and the Quickshell shell toolkit, and it is designed for people who work alongside a coding agent."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Okonomi and Okimari?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Okonomi means as you like it: the installer asks what you want and installs exactly that, with no pre-selected browser, terminal, editor or AI tool. Okimari means a fixed course: presets named Nami, Jo, Tokujo and Hardened install a known-good setup for people who would rather not choose every detail."
            }
          },
          {
            "@type": "Question",
            "name": "What is the safety floor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some settings are not taste and stay on by default: a firewall with a default-deny policy, full-disk encryption, signed packages, no passwordless sudo, and no telemetry. Advanced users can change them, but only through an explicit path that warns first."
            }
          },
          {
            "@type": "Question",
            "name": "Which Linux distribution is Marchy based on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Arch Linux, on a rolling release. Marchy uses pacman and the AUR the way any Arch system does, and it does not hide them behind a separate package format."
            }
          },
          {
            "@type": "Question",
            "name": "Which window manager does Marchy use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hyprland, the Wayland tiling window manager. The desktop shell around it is built with Quickshell. Marchy is Wayland only; X11 is not a target."
            }
          },
          {
            "@type": "Question",
            "name": "Is Marchy free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Marchy costs nothing to download and run. The documentation and the website are MIT licensed; Marchy's own source code is proprietary, and the vendored upstream projects keep their own licences."
            }
          },
          {
            "@type": "Question",
            "name": "Does Marchy collect telemetry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. No telemetry is part of the safety floor, so nothing about your machine leaves it by default."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Marchy with AI coding agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That is the point of the project. The desktop assumes a coding agent is running on the same machine: a fast terminal, scriptable window management, no telemetry, and a conventional Arch base an agent can install into without fighting the platform."
            }
          },
          {
            "@type": "Question",
            "name": "How is Marchy different from installing Arch Linux and Hyprland myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can, and Marchy does not lock you out of that. What Marchy adds is the installer: a questionnaire that installs only what you asked for, or a preset that installs a known-good set, plus a safety floor that is configured before your first login instead of after."
            }
          },
          {
            "@type": "Question",
            "name": "Can I change my choices after installing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every installer choice is recorded and reversible, and every option documents what it changes and how to undo it. Presets are a starting point, not a lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "Is Marchy affiliated with Arch Linux or Hyprland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Marchy is an independent project. It builds on those projects and links to them for attribution, but it is not affiliated with or endorsed by them."
            }
          }
        ]
      }
---

# Frequently asked questions

## What is Marchy?

Marchy is an independent, free and open source **Arch Linux desktop** created by [FILINT](https://github.com/IamNOTfilint). It is built on the [Hyprland](https://hyprland.org) Wayland compositor and the Quickshell shell toolkit, and it is designed for people who work alongside a coding agent.

## What is the difference between Okonomi and Okimari?

**Okonomi** means *as you like it*: the installer asks what you want and installs exactly that, with no pre-selected browser, terminal, editor, or AI tool.

**Okimari** means *a fixed course*: presets named Nami, Jo, Tokujo, and Hardened install a known-good setup for people who would rather not choose every detail.

Both are explained in [Okonomi and Okimari](./philosophy/okonomi/).

## What is the safety floor?

Some settings are not taste and stay on by default:

- firewall active, default deny
- full-disk encryption
- signed packages
- no passwordless sudo
- no telemetry

Advanced users can change them, but only through an explicit path that warns first.

## Which Linux distribution is Marchy based on?

[Arch Linux](https://archlinux.org), on a rolling release. Marchy uses `pacman` and the AUR the way any Arch system does — it does not hide them behind a separate package format.

## Which window manager does Marchy use?

[Hyprland](https://hyprland.org), the Wayland tiling window manager. The desktop shell around it is built with Quickshell. Marchy is **Wayland only**; X11 is not a target.

## Is Marchy free?

Yes. Marchy costs nothing to download and run. The **documentation and the website are MIT licensed**; Marchy's **own source code is proprietary**, and the vendored upstream projects keep their own licences — see [Upstream projects](./upstream/).

## Does Marchy collect telemetry?

No. No telemetry is part of the safety floor, so nothing about your machine leaves it by default.

## Can I use Marchy with AI coding agents?

That is the point of the project. The desktop assumes a coding agent is running on the same machine: a fast terminal, scriptable window management, no telemetry, and a conventional Arch base an agent can install into without fighting the platform.

## How is Marchy different from installing Arch Linux and Hyprland myself?

You can, and Marchy does not lock you out of that — see [Installing on your hardware](./install/) for the manual path.

What Marchy adds is the installer: a questionnaire that installs only what you asked for, or a preset that installs a known-good set, plus a safety floor that is configured *before* your first login instead of after.

## Can I change my choices after installing?

Yes. Every installer choice is recorded and reversible, and every option documents what it changes and how to undo it. Presets are a starting point, not a lock-in.

## Is Marchy affiliated with Arch Linux or Hyprland?

No. Marchy is an independent project. It builds on those projects and links to them for attribution, but it is not affiliated with or endorsed by them.
