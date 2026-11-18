---
title: Frequently asked questions
description: Answers about Marchy — an operating system with Okonomi, Okimari, a hard safety floor, and no telemetry.
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
                              "text": "Marchy is an independent operating system created by FILINT. It is built to be chosen by you, and it is designed for people who work alongside a coding agent."
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
                              "text": "Some settings are not taste and stay on by default: a firewall with a default-deny policy, full-disk encryption, signed packages, no passwordless privilege escalation, and no telemetry. Advanced users can change them, but only through an explicit path that warns first."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Is Marchy free?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. Marchy costs nothing to download and run. The documentation and the website are MIT licensed; Marchy's own source code is proprietary, and the components it is built from keep their own licences."
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
                              "text": "That is the point of the project. The desktop assumes a coding agent is running on the same machine: a fast terminal, scriptable window management, no telemetry, and sandboxes an agent can work in with a snapshot to roll back to."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "How is Marchy different from building a desktop myself?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "You can, and Marchy does not lock you out of that — see Installing on your hardware for the manual path. What Marchy adds is the installer: a questionnaire that installs only what you asked for, or a preset that installs a known-good set, plus a safety floor that is configured before your first login instead of after."
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
                        "name": "Does Marchy sandbox agents?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. An agent can run inside an isolated environment that is snapshotted before it starts and rolled back or discarded afterwards, so a bad run costs nothing."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "What is a boot environment?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "A snapshot of the running system you can boot back into. A failed update or a broken configuration is a reboot away from undone."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Is Marchy affiliated with the projects it builds on?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. Marchy is an independent project. It builds on other work and links to it for attribution, but it is not affiliated with or endorsed by any of them."
                        }
                  }
            ]
      }
---

# Frequently asked questions

## What is Marchy?

Marchy is an independent operating system created by FILINT. It is built to be chosen by you, and it is designed for people who work alongside a coding agent.

## What is the difference between Okonomi and Okimari?

Okonomi means as you like it: the installer asks what you want and installs exactly that, with no pre-selected browser, terminal, editor or AI tool. Okimari means a fixed course: presets named Nami, Jo, Tokujo and Hardened install a known-good setup for people who would rather not choose every detail.

## What is the safety floor?

Some settings are not taste and stay on by default: a firewall with a default-deny policy, full-disk encryption, signed packages, no passwordless privilege escalation, and no telemetry. Advanced users can change them, but only through an explicit path that warns first.

## Is Marchy free?

Yes. Marchy costs nothing to download and run. The documentation and the website are MIT licensed; Marchy's own source code is proprietary, and the components it is built from keep their own licences.

## Does Marchy collect telemetry?

No. No telemetry is part of the safety floor, so nothing about your machine leaves it by default.

## Can I use Marchy with AI coding agents?

That is the point of the project. The desktop assumes a coding agent is running on the same machine: a fast terminal, scriptable window management, no telemetry, and sandboxes an agent can work in with a snapshot to roll back to.

## How is Marchy different from building a desktop myself?

You can, and Marchy does not lock you out of that — see Installing on your hardware for the manual path. What Marchy adds is the installer: a questionnaire that installs only what you asked for, or a preset that installs a known-good set, plus a safety floor that is configured before your first login instead of after.

## Can I change my choices after installing?

Yes. Every installer choice is recorded and reversible, and every option documents what it changes and how to undo it. Presets are a starting point, not a lock-in.

## Does Marchy sandbox agents?

Yes. An agent can run inside an isolated environment that is snapshotted before it starts and rolled back or discarded afterwards, so a bad run costs nothing.

## What is a boot environment?

A snapshot of the running system you can boot back into. A failed update or a broken configuration is a reboot away from undone.

## Is Marchy affiliated with the projects it builds on?

No. Marchy is an independent project. It builds on other work and links to it for attribution, but it is not affiliated with or endorsed by any of them.
