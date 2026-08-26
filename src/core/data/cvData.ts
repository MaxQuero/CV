import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer · Référent Technique & IA',
    summary:
      'Ingénieur fullstack avec 11 ans d’expérience (TypeScript, Node.js, React, Cloud GCP/AWS). Référent technique en environnement bancaire et paiement (PCI-DSS) : architecture Clean / Hexagonale / DDD, qualité logicielle, industrialisation du delivery par agents IA (Claude Code, MCP). Orienté impact produit et fiabilité en production.',
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
      position: 'Référent Technique & IA (AI-Augmented Engineering) · Senior Fullstack Engineer',
      startDate: 'Jan. 2024',
      endDate: 'Aujourd’hui',
      location: 'Nantes',
      context:
        'Plateforme de paiement PCI-DSS. Référent technique et innovation, en charge de la modernisation de l’architecture et du delivery.',
      achievements: [
        'Conçu et piloté la V2 modulaire d’intégration des moyens de paiement (Google Pay, Apple Pay…) : discovery, architecture hexagonale, ADRs, mise en production du socle.',
        'Porté la démarche AI-augmented engineering au niveau de l’équipe : conçu le socle (context engineering, CLAUDE.md, skills, MCP Jira) permettant l’implémentation de tickets de bout en bout par agent IA sous revue humaine, et accompagné son adoption.',
        'Refondu le connecteur Shopify (Node.js, Terraform, GCP) et livré la logique de paiement mixte (Mix Payment) en production.',
        'POC d’ajout automatisé de moyens de paiement par IA validé ; industrialisation planifiée fin 2026.',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'GCP', 'Terraform', 'Claude Code', 'MCP', 'Clean Architecture', 'DDD', 'PCI-DSS'],
    },
    {
      company: 'Conserto',
      client: 'SNCF Connect, Vecteur Plus',
      position: 'Senior Fullstack & Cloud Engineer',
      startDate: 'Jan. 2023',
      endDate: 'Déc. 2023',
      location: 'Nantes',
      context: 'Missions courtes à fort enjeu technique : modernisation Cloud et fiabilisation des déploiements.',
      achievements: [
        'SNCF Connect : modernisé l’infrastructure Cloud et la stack front (Vite), refondu la pyramide de tests (Vitest, Playwright) et fiabilisé les releases.',
        'Vecteur Plus : conçu et développé un bloc d’authentification centralisé (Node.js, React) déployé sur AWS via SDK et CDK.',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS CDK', 'Playwright', 'Vitest', 'Vite'],
    },
    {
      company: 'Conserto',
      client: 'My Money Bank',
      position: 'Fullstack Engineer',
      startDate: 'Oct. 2021',
      endDate: 'Déc. 2022',
      location: 'Nantes',
      context:
        'Plateforme métier eSofi (regroupement de crédits) en contexte bancaire critique et transition d’acquisition.',
      achievements: [
        'Conçu et livré des évolutions fullstack (React, Node.js, GraphQL) en challengeant le besoin métier avec les équipes produit.',
        'Déployé la stack sur Kubernetes, mis en place le monitoring (Grafana) et assuré le support niveau 2 : continuité de service garantie, temps de résolution des incidents réduit.',
      ],
      technologies: ['Node.js', 'React', 'GraphQL', 'Apollo', 'RabbitMQ', 'Kubernetes', 'Grafana'],
    },
  ],
  previousExperiences: [
    {
      period: '2020 – 2021',
      company: 'Conserto (EP)',
      position: 'Frontend Engineer',
      technologies: ['Angular', 'TypeScript', 'Docker'],
    },
    {
      period: '2019 – 2020',
      company: 'Fifty Truck',
      position: 'Fullstack Engineer JS / PHP',
      technologies: ['Laravel', 'Angular', 'Ionic'],
    },
    {
      period: '2017 – 2019',
      company: 'Digital Garden, Start-up Palace',
      position: 'Fullstack Engineer PHP / JS',
      technologies: ['Symfony', 'Drupal 8', 'Angular'],
    },
    {
      period: '2014 – 2016',
      company: 'CGI (alternance)',
      position: 'Fullstack Engineer e-commerce',
      technologies: ['Magento', 'Symfony 2', 'Zend'],
    },
  ],
  education: [
    {
      year: '2016',
      degree: 'Expert en informatique et systèmes d’information (Bac+5)',
      school: 'EPSI Lille',
    },
    {
      year: '2013',
      degree: 'DUT Informatique (Bac+2)',
      school: 'IUT Lannion',
    },
  ],
  skills: [
    { category: 'Langages', items: ['TypeScript', 'JavaScript', 'Node.js', 'PHP', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Vite', 'Angular', 'Playwright', 'Vitest'] },
    { category: 'Backend', items: ['Node.js', 'GraphQL', 'REST', 'RabbitMQ', 'Symfony'] },
    { category: 'Cloud & DevOps', items: ['GCP', 'AWS (CDK)', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD', 'Grafana'] },
    { category: 'Architecture', items: ['Clean Architecture', 'Hexagonale', 'DDD', 'SOLID', 'ADR', 'PCI-DSS'] },
    { category: 'IA & Delivery', items: ['Claude Code', 'MCP', 'Agents IA', 'Context engineering', 'LLM'] },
  ],
  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'C1 · TOEIC 945/990' },
  ],
};
