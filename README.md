# CV React Moderne

CV moderne et professionnel développé avec React, TypeScript, MUI et Vite, exécuté par Bun.

## Stack Technique

- **Runtime** : Bun
- **Build Tool** : Vite
- **Framework** : React 18 + TypeScript
- **UI Library** : Material-UI (MUI) v5
- **Styling** : Emotion (intégré avec MUI)
- **PDF Export** : @react-pdf/renderer
- **Icons** : react-icons, @mui/icons-material

## Installation

```bash
bun install
```

## Développement

```bash
bun dev
```

## Build

```bash
bun run build
```

## Prévisualisation

```bash
bun run preview
```

## Architecture

Le projet suit une architecture simplifiée avec Atomic Design :

- **Atomes** : Composants MUI de base (Typography, Button, Card, Chip, etc.)
- **Molécules** : Composants assemblés (Section, ExperienceItem, ContactInfo, etc.)
- **Organismes** : Sections complexes (CVHeader, ExperienceSection, etc.)

## Design System

Thème "Modern Tech / Dark Mode" :
- Palette : Background #0F172A, Paper #1E293B, Primary #10B981
- Typography : Inter (corps), JetBrains Mono (titres et chips)
- Chips stylisés comme des tags de code

## Fonctionnalités

- Affichage responsive du CV
- Export PDF vectoriel de qualité professionnelle
- Approche STAR pour les expériences majeures
- Format compact pour les expériences fondations
