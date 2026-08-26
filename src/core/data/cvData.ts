import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer | Référent Technique | AI-Augmented Engineering',
    tagline:
      '11 ans d’expérience. Architecture (Clean, Hexagonal, DDD), qualité logicielle et delivery industrialisé par agents IA.',
    email: 'maxime.quero@gmail.com',
    phone: '06 41 75 77 61',
    location: 'Nantes (44)',
    linkedIn: 'https://www.linkedin.com/in/maxime-quero',
    github: 'https://github.com/MaxQuero',
  },
  majorExperiences: [
    {
      type: 'major',
      company: 'Conserto (HiPay)',
      position: 'Senior Fullstack Engineer & Référent Tech',
      startDate: 'Jan 2024',
      endDate: 'Aujourd\'hui',
      star: {
        situation:
          'Référent technique & innovation en contexte PCI-DSS, en charge de la modernisation du delivery.',
        task: '',
        action: [
          'Architecture : discovery et conception d\'une V2 modulaire d\'intégration de moyens de paiement (Google Pay...).',
          'AI-augmented engineering : socle de context engineering (CLAUDE.md, ADRs, skills, MCP Jira) pour implémenter un ticket de bout en bout par agent, sous revue humaine.',
          'Expertise : refonte du connecteur Node Shopify (Terraform/GCP) et logique de multi-paiement complexe.'
        ],
        result:
          'Socle V2 évolutif ; Shopify et Mix Payment en production ; POC d\'ajout automatisé de moyens de paiement par IA, industrialisation fin 2026.',
      },
      technologies: ['Node / React', 'TypeScript', 'GCP', 'Terraform', 'Claude Code / MCP', 'Archi Clean / Hexagonale', 'DDD'],
    },
    {
      type: 'major',
      company: 'Conserto (SNCF Connect & Vecteur Plus)',
      position: 'Senior Fullstack Engineer & Cloud',
      startDate: 'Jan 2023',
      endDate: 'Déc 2023',
      star: {
        situation:
          'Moderniser les infrastructures Cloud et fiabiliser les processus de déploiement sur des missions courtes à fort enjeu technique.',
        task: '',
        action: [
          'SNCF Connect : Modernisation des infrastructures Cloud et evolutions de la stack et de la pyramide de tests (Playwright/Vitest).',
          'Vecteur Plus : Conception et réalisation d’un bloc d’authentification centralisé et déploiement via AWS (SDK & CDK).',        ],
        result: 'Modernsisation des releases et développements d\'évolutions.'
      },
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS CDK', 'Playwright', 'Vite'],
    },
    {
      type: 'major',
      company: 'Conserto (My Money Bank)',
      position: 'Fullstack Engineer',
      startDate: 'Oct 2021',
      endDate: 'Déc 2022',
      star: {
        situation: ' Faire évoluer et garantir l\'UX et la stabilitéde la plateforme métier eSofi (regroupement de crédits) dans un contexte critique bancaire.',
        task: '',
        action: [
          'Conception fullstack (React/Node) et intégration d\'évolutions pour challenger le besoin métier (regroupement de crédits).',
          'Run & Monitoring : Déploiement de la stack sur Kubernetes et support métier direct de niveau 2.'
        ],
        result: 'Continuité de service assurée avec succès durant la transition d\'acquisition, et accélération de la résolution des incidents.'
      },
      technologies: ['Node.js / React', 'GraphQL / Apollo', 'RabbitMQ', 'Kubernetes', 'Grafana'],
    },
  ],
  foundationExperiences: [
    {
      type: 'foundation',
      period: '2020 - 2021',
      company: 'Conserto (EP)',
      position: 'Frontend engineer',
      description:
        '',
      technologies: ['Angular', 'TypeScript', 'Docker'],
    },
    {
      type: 'foundation',
      period: '2019 - 2020',
      company: 'Fifty Truck',
      position: 'Fullstack engineer JS/PHP',
      description:
        '',
      technologies: ['Laravel', 'Angular', 'Ionic'],
    },
    {
      type: 'foundation',
      period: '2017 - 2019',
      company: 'Digital Garden & Start-up Palace',
      position: 'Fullstack PHP/JS',
      description: '',
      technologies: ['Symfony', 'Drupal 8', 'Angular'],
    },
    {
      type: 'foundation',
      period: '2014 - 2016',
      company: 'CGI (Alternance)',
      position: 'Fullstack e-commerce engineer',
      description:
        '',
      technologies: ['Magento', 'Symfony 2', 'Zend'],
    },
  ],
  education: [
    {
      year: '2016',
      level: 'BAC +5',
      degree: 'Expert en informatique et S.I.',
      school: 'EPSI Lille (59)',
    },
    {
      year: '2013',
      level: 'BAC +2',
      degree: 'DUT Informatique',
      school: 'IUT LANNION (22)',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Vite'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'GraphQL', 'Symfony'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['GCP', 'AWS', 'Terraform', 'K8s'],
    },
    {
      category: 'Architecture & Méthodologies',
      items: ['DDD', 'Clean Arch.', 'SOLID', 'PCI-DSS'],
    },
    {
      category: 'IA & Delivery',
      items: ['Claude Code', 'MCP', 'Agents', 'Context engineering'],
    },
  ],
  languages: [
    {
      name: 'Anglais',
      level: 'C1 (TOEIC 945/990)',
    },
    {
      name: 'Français',
      level: 'Natif',
    },
  ],
};
