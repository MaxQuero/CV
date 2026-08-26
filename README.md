# CV Maxime QUERO

CV une page A4, sobre, compatible ATS. React 18 + TypeScript + Vite, CSS modules, police Inter. Aucune librairie UI.

## Commandes

```bash
bun install
bun dev        # http://localhost:5173
bun run build
bun run lint
```

## Export PDF

1. Ouvrir le CV dans Chrome / Edge.
2. Cmd+P (Ctrl+P), destination « Enregistrer au format PDF ».
3. Format A4, marges « Aucune », échelle 100 %, « Graphismes d'arrière-plan » activé.

Le document est calibré pour tenir sur exactement une page. Si le texte déborde, réduire le contenu dans `src/core/data/cvData.ts` ou ajuster `--fs-body` / `--gap-section` dans `src/styles/tokens.css`.

## Structure

- `src/core/data/cvData.ts` : contenu du CV (seul fichier à éditer au quotidien).
- `src/core/types/cv.types.ts` : modèle de données.
- `src/features/*` : sections (header, expériences, compétences, formation, langues).
- `src/styles/` : tokens, base, impression.

## Règles ATS

- Texte réel uniquement : pas d'icône porteuse d'information, pas d'image, pas de tableau.
- Titres de section standards, hiérarchie h1 / h2 / h3, ordre DOM sémantique.
- Une seule police, tailles ≥ 8.4 pt, un seul accent couleur.
