import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer | Référent Technique',
    tagline:
      'Référent technique fullstack TypeScript/Node.js, 11 ans d’expérience. Spécialiste des architectures modernes (Clean, Hexagonal, DDD) et de la qualité logicielle.',
    /** Ex. : '/ma-photo.jpg' (fichier dans `public/`) — laisser absent pour le cadre placeholder */
    // photoUrl: '/ma-photo.jpg',
    email: 'maxime.quero@gmail.com',
    phone: '06 41 75 77 61',
    location: 'Nantes (44)',
    linkedIn: 'https://www.linkedin.com/in/maxime-quero',
    github: 'https://github.com/MaxQuero',
  },
  majorExperiences: [
    {
      type: 'major',
      company: 'HiPay',
      position: 'Senior Fullstack Engineer & Référent Tech',
      startDate: 'Janvier 2024',
      endDate: 'Présent',
      star: {
        situation:
          'Connecteur Shopify (Mix Payment) et SDK marchands, socle legacy en contexte PCI-DSS.',
        task: 'Piloter la migration v2 du SDK et l’infrastructure Shopify sur GCP.',
        action: [
          'Google Pay dans le SDK v2 (architecture en couches), socle pour les futurs wallets (Apple Pay).',
          'Industrialisation du SDK v2 (ADR, Mermaid, AGENTS.md) et POC SDK Tester (DDD, Clean Architecture).',
          'Infrastructure Shopify Master/Children Terraform + GCP Pub/Sub avec service de chiffrement.',
        ],
        result:
          'Mix Payment livré en PCI-DSS ; SDK v2 prêt pour les futurs moyens de paiement.',
      },
      technologies: ['TypeScript', 'Node.js', 'Google Pay', 'GCP', 'Shopify', 'PCI-DSS'],
    },
    {
      type: 'major',
      company: 'SNCF Connect',
      position: 'Développeur Fullstack & Cloud',
      startDate: 'Janvier 2023',
      endDate: 'Janvier 2024',
      star: {
        situation:
          'Plateformes d’abonnement MAX, environnement à fort trafic et haute disponibilité.',
        task: 'Fiabiliser les déploiements et accélérer la productivité de l’équipe.',
        action: [
          'Migration infra vers AWS CDK et fiabilisation de la pyramide de tests (Playwright, Vitest).',
          'Développement des fonctionnalités d’abonnement MAX (TypeScript, React, Node.js).',
        ],
        result:
          'Builds accélérés, tests stabilisés et expérience utilisateur améliorée en production.',
      },
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS CDK', 'Playwright', 'Vite'],
    },
    {
      type: 'major',
      company: 'My Money Bank',
      position: 'Développeur Fullstack Senior',
      startDate: 'Octobre 2021',
      endDate: 'Décembre 2022',
      star: {
        situation: 'Application eSofi de crédits bancaires durant une fusion bancaire.',
        task: 'Garantir la stabilité de la plateforme et l’UX, front et back.',
        action: [
          'Évolutions front et back de l’application de crédits eSofi.',
          'Stack GraphQL/Apollo déployée sur Kubernetes.',
        ],
        result:
          'Plateforme stabilisée à 100 % de disponibilité, support métier niveau 2 assuré.',
      },
      technologies: ['React', 'GraphQL', 'Apollo', 'Kubernetes', 'Node.js'],
    },
  ],
  foundationExperiences: [
    {
      type: 'foundation',
      period: '2019 - 2020',
      company: 'Fifty Truck',
      position: 'Fullstack JS/PHP',
      description:
        'Application desktop Angular/Laravel et application mobile déployée sur les stores via Capacitor.',
      technologies: ['Ionic 4', 'Angular 8', 'Laravel 6', 'Capacitor', 'IOS', 'Android'],
    },
    {
      type: 'foundation',
      period: '2017 - 2019',
      company: 'Digital Garden & Start-up Palace',
      position: 'Fullstack PHP/JS',
      description: 'Développement de projets clients en Symfony, Drupal 8 et Vue.js.',
      technologies: ['Symfony', 'Drupal 8', 'Wordpress', 'VueJS', 'PHP', 'Angular'],
    },
    {
      type: 'foundation',
      period: '2014 - 2016',
      company: 'CGI (Alternance)',
      position: 'Développeur E-commerce',
      description:
        'Sites e-commerce Magento, Symfony 2 et Zend pour des clients du secteur luxe (LVMH, etc.).',
      technologies: ['Magento', 'Symfony 2', 'Zend Framework'],
    },
  ],
  education: [
    {
      year: '2016',
      level: 'BAC +5',
      degree: 'Expert en informatique et système d\'informations',
      school: 'EPSI Lille (59)',
    },
    {
      year: '2013',
      level: 'BAC +2',
      degree: 'DUT Informatique spécialité Imagerie Numérique',
      school: 'IUT LANNION (22)',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'Angular', 'Vue.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'GraphQL', 'PHP', 'Symfony', 'Laravel'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['GCP', 'AWS CDK', 'Terraform', 'Kubernetes', 'Docker'],
    },
    {
      category: 'Architecture & Méthodologies',
      items: ['DDD', 'Clean Architecture', 'Hexagonal Architecture', 'SOLID', 'PCI-DSS'],
    },
  ],
  languages: [
    {
      name: 'Anglais',
      level: 'TOEIC 945/990, EF SET 63/100 (C1)',
    },
    {
      name: 'Français',
      level: 'Natif',
    },
  ],
};
