---
title: Installing on your hardware
description: How to install Marchy — an Arch Linux desktop with Hyprland — today, and what the official Marchy installer will do for you when it lands.
---

# Installing on your hardware

Marchy is currently at **v0.1.0**. The documentation, the website, and the design of the desktop are public; the official installer is still being built. This page covers what you can do right now, and what the Marchy installer will take over later.

## Requirements

- 64-bit x86_64 hardware (arm64 on request)
- 8 GB RAM or more
- 40 GB free disk space
- UEFI with Secure Boot support
- A 2 GB or larger USB stick

## Today: Arch Linux and Hyprland by hand

Marchy's base is a stock [Arch Linux](https://archlinux.org) installation with [Hyprland](https://hyprland.org) on top. If you want the desktop now, install Arch and add Hyprland yourself.

### 1. Media

Download the latest Arch Linux ISO and verify its SHA-256 signature before writing it. Boot from the USB stick and select the "arch" entry.

### 2. Network

```sh
iwctl
device list
station wlan0 connect <SSID>
```

### 3. Partitioning

One EFI system partition, one root partition, and a swapfile:

```sh
# roughly
/dev/nvme0n1p1  1G   EFI System      (FAT32)
/dev/nvme0n1p2  rest ext4           (root)
/swapfile       8G   swapfile
```

Format with `mkfs.fat`, `mkfs.ext4`, then `mkswap /swapfile` and `swapon /swapfile`.

### 4. Base system

```sh
pacstrap -K /mnt base linux linux-firmware
arch-chroot /mnt
```

Inside the chroot, set the timezone and hostname, enable `NetworkManager` and `systemd-resolved`, and add your user to the `wheel` group.

### 5. Hyprland and the desktop

```sh
pacman -S hyprland hyprpaper hyprlock hypridle hyprpicker \
  kitty quickshell waybar wofi xdg-desktop-portal-hyprland \
  pipewire pipewire-pulse wireplumber playerctl \
  grim slurp brightnessctl bluez bluez-utils \
  ttf-jetbrains-mono papirus-icon-theme
```

For a login screen, use `ly` with its Hyprland configuration, or `greetd` with `tuigreet`.

### 6. Initramfs

Hyprland needs early KMS support, so add `kms` and `microcode` to `mkinitcpio.conf`:

```ini
HOOKS=(base udev autodetect microcode modconf kms keyboard)
```

Then run `mkinitcpio -P`.

### 7. Bootloader

Install `systemd-boot` or GRUB, make the EFI partition bootable, and add an entry for `/boot/vmlinuz-linux` with `initrd=/boot/initramfs-linux.img` and the `rw` root parameter. If you use a swapfile with hibernation, configure the resume hook and the `resume=` kernel parameter to match.

### 8. Full-disk encryption

Encryption is part of Marchy's safety floor. Encrypt the root partition with `cryptsetup`, hook it into `initramfs` with the `encrypt` hook, and point `cryptdevice=` at the right device. A swapfile needs its own encrypted swap setup — a plain swapfile leaks its contents to disk.

### 9. Lock in the safety floor

```sh
pacman -S ufw
systemctl enable --now ufw
ufw default deny incoming
ufw default allow outgoing
ufw enable
```

## What the Marchy installer will do

The Marchy installer turns the manual steps above into a questionnaire and an installer script:

- **Okonomi** asks which browser, terminal, editor, AI tools, desktop style, and keybinds you want — and installs exactly those, skipping the rest.
- **Okimari** installs a whole preset instead: Nami, Jo, Tokujo, or Hardened.
- Either way it sets up the safety floor — firewall, full-disk encryption, signed packages, no passwordless sudo, no telemetry — before it hands you a working session.

Nothing in the installer is irreversible: every choice is recorded and can be changed later.

## Follow along

The OS source is developed in a private repository. Public progress is tracked through [Marchy on GitHub](https://github.com/IamNOTfilint/marchy-public) and the [v0.1.0 release](https://github.com/IamNOTfilint/marchy-public/releases).
