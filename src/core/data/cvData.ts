import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer · IA appliquée & Architecture',
    highlights: [
      { label: 'Fullstack · 11 ans', text: 'TypeScript, Node.js, React\nGCP, AWS' },
      { label: 'Architecture', text: 'Clean / Hexagonale\névénementielle, ADR' },
      { label: 'Contextes critiques', text: 'Paiement, banque\nPCI-DSS, DSP2' },
      { label: 'Agents IA', text: 'Claude Code, MCP\ncontext engineering' },
    ],
    email: 'maxime.quero@gmail.com',
    phone: '06 41 75 77 61',
    location: 'Nantes (44)',
    linkedIn: 'https://www.linkedin.com/in/maxime-quero',
    github: 'https://github.com/MaxQuero',
  },
  experiences: [
    {
      company: 'Conserto',
      client: 'HiPay',
      sector: 'paiement omnicanal',
      position: 'Senior Fullstack Engineer · Référent technique & IA',
      startDate: 'Jan. 2024',
      endDate: 'Aujourd’hui',
      location: 'Nantes',
      achievements: [
        '**Agents IA** : déployé le context engineering dans l’équipe (CLAUDE.md, ADRs, skills, MCP Jira), tickets livrés de bout en bout sous revue humaine.',
        '**POC IA** : conçu un flux d’agents automatisant l’ajout d’un moyen de paiement.',
        '**SDK JS marchands** : conçu et réalisé la refonte, architecture V2 modulaire d’intégration des moyens de paiement (ANCV, Google Pay…).',
        '**Mix Payment** (carte cadeau + carte bancaire) : conçu l’architecture et la compensation des transactions en erreur.',
        '**Connecteur Shopify** (PCI-DSS, DSP2) : piloté techniquement le projet et conçu son architecture événementielle Pub/Sub sur GCP (Terraform).',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'GCP', 'Terraform', 'Claude Code', 'MCP'],
    },
    {
      company: 'Conserto',
      client: 'SNCF Connect, Vecteur Plus',
      position: 'Senior Fullstack & Cloud Engineer',
      startDate: 'Jan. 2023',
      endDate: 'Déc. 2023',
      location: 'Nantes',
      achievements: [
        '**SNCF Connect** : livré des fonctionnalités React / Node.js sur AWS, migré Serverless vers CDK, Mocha vers Playwright et Jest vers Vitest.',
        '**Vecteur Plus** : conçu et développé le bloc d’authentification de l’écosystème (Node.js, AWS Lambda, API Gateway, CDK).',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS Lambda', 'AWS CDK', 'Playwright', 'Vitest'],
    },
    {
      company: 'Conserto',
      client: 'My Money Bank',
      sector: 'regroupement de crédits',
      position: 'Fullstack Engineer',
      startDate: 'Oct. 2021',
      endDate: 'Déc. 2022',
      location: 'Nantes',
      achievements: [
        '**Plateforme eSofi** : livré des évolutions fullstack (React, Node.js, GraphQL), assuré le run et la continuité de service pendant l’acquisition.',
      ],
      technologies: ['Node.js', 'React', 'GraphQL', 'Apollo', 'RabbitMQ', 'Kubernetes', 'Grafana'],
    },
  ],
  projects: [
    {
      name: 'Prism',
      description: 'prévision de la consommation électrique française',
      period: '2026',
      status: 'en cours',
      achievements: [
        '**Prévision à 24 h** : évalué Chronos (modèle de fondation) sur données RTE, MAPE 2,5 % contre 6,6 % pour la baseline, sur 73 fenêtres.',
        '**Service ML** : développé en Python selon une architecture hexagonale (FastAPI, pandas), avec Pyright strict, pytest et Docker.',
      ],
      technologies: ['Python', 'FastAPI', 'Chronos', 'pandas', 'pytest', 'Docker'],
    },
  ],
  previousExperiences: [
    { period: '2020 – 2021', company: 'EP (Conserto)', position: 'Frontend Engineer', technologies: ['Angular', 'TypeScript'] },
    { period: '2019 – 2020', company: 'Fifty Truck', position: 'Fullstack Engineer', technologies: ['Laravel', 'Angular'] },
    { period: '2017 – 2019', company: 'Digital Garden, Start-up Palace', position: 'Fullstack Engineer', technologies: ['Symfony'] },
    { period: '2014 – 2016', company: 'CGI (alternance)', position: 'Fullstack Engineer e-commerce', technologies: ['Magento'] },
  ],
  education: [
    { year: '2016', degree: 'Expert en informatique et S.I. (Bac+5)', school: 'EPSI Lille' },
    { year: '2013', degree: 'DUT Informatique (Bac+2)', school: 'IUT Lannion' },
  ],
  skills: [
    { category: 'Langages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP'] },
    { category: 'Frontend', items: ['React', 'Vite', 'Angular', 'Playwright', 'Vitest'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'REST', 'FastAPI', 'RabbitMQ'] },
    { category: 'Cloud & DevOps', items: ['GCP (Cloud Run, Pub/Sub)', 'AWS (Lambda, CDK)', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD'] },
    { category: 'Architecture', items: ['Clean / Hexagonale', 'DDD', 'Événementielle', 'ADR', 'SOLID', 'PCI-DSS', 'DSP2'] },
    { category: 'IA & Data', items: ['Claude Code', 'Cursor', 'MCP', 'Context engineering', 'Chronos', 'pandas', 'Backtesting'] },
  ],
  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'C1 · TOEIC 945/990' },
    { name: 'Espagnol', level: 'Intermédiaire' },
  ],
};
