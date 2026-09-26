import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer · AI-Augmented Engineering',
    summary:
      '11 ans d’expérience TypeScript, Node.js, React et Cloud (GCP, AWS) en contexte paiement et bancaire. Architectures Clean / Hexagonale et événementielles, agents IA au quotidien, ML appliqué en Python.',
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
      position: 'Senior Fullstack Engineer · Référent technique',
      startDate: 'Jan. 2024',
      endDate: 'Aujourd’hui',
      location: 'Nantes',
      achievements: [
        'Conçu et réalisé la refonte du SDK JS marchands : architecture V2 modulaire d’intégration des moyens de paiement (ANCV, Google Pay…).',
        'Mix Payment (carte cadeau + carte bancaire) : conçu l’architecture et la compensation des transactions en erreur.',
        'Pilotage technique du connecteur Shopify (DSP2, PCI-DSS) : architecture événementielle Pub/Sub sur GCP, provisionnée en Terraform.',
        'Introduit les agents IA dans l’équipe (Claude Code, MCP, context engineering) : tickets livrés de bout en bout sous revue humaine.',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'GCP', 'Terraform', 'Claude Code', 'PCI-DSS'],
    },
    {
      company: 'Conserto',
      client: 'SNCF Connect, Vecteur Plus',
      position: 'Senior Fullstack & Cloud Engineer',
      startDate: 'Jan. 2023',
      endDate: 'Déc. 2023',
      location: 'Nantes',
      achievements: [
        'SNCF Connect (applications Max) : fonctionnalités React / Node.js sur AWS ; migré Serverless vers CDK, Mocha vers Playwright, Jest vers Vitest.',
        'Vecteur Plus : conçu et développé le bloc d’authentification de l’écosystème (Node.js, AWS Lambda, API Gateway, CDK).',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS Lambda', 'AWS CDK', 'Playwright', 'Vitest'],
    },
    {
      company: 'Conserto',
      client: 'My Money Bank',
      sector: 'banque, regroupement de crédits',
      position: 'Fullstack Engineer',
      startDate: 'Oct. 2021',
      endDate: 'Déc. 2022',
      location: 'Nantes',
      achievements: [
        'Plateforme eSofi : conçu et livré des évolutions fullstack (React, Node.js, GraphQL) en challengeant le besoin métier et l’UX.',
        'Déploiement Kubernetes, run et support N2 : continuité de service assurée pendant l’acquisition.',
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
        'Prévision horaire à 24 h par modèle de fondation (Chronos) sur données RTE : MAPE 2,5 % contre 6,6 % pour la baseline, en backtest sur 73 fenêtres.',
        'Service Python hexagonal (FastAPI, pandas), Pyright strict, pytest, Docker.',
      ],
      technologies: ['Python', 'FastAPI', 'Chronos', 'pandas', 'pytest', 'Docker'],
    },
  ],
  previousExperiences: [
    { period: '2020 – 2021', company: 'Conserto (EP)', position: 'Frontend Engineer', technologies: ['Angular', 'TypeScript'] },
    { period: '2019 – 2020', company: 'Fifty Truck', position: 'Fullstack Engineer', technologies: ['Laravel', 'Angular'] },
    { period: '2017 – 2019', company: 'Digital Garden, Start-up Palace', position: 'Fullstack Engineer', technologies: ['Symfony'] },
    { period: '2014 – 2016', company: 'CGI (alternance)', position: 'Fullstack e-commerce', technologies: ['Magento', 'Symfony'] },
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
