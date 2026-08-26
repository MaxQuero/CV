import { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    firstName: 'Maxime',
    lastName: 'QUERO',
    title: 'Senior Fullstack Engineer · Référent Technique & IA',
    summary:
      '11 ans d’expérience TypeScript, Node.js, React et Cloud (GCP, AWS). Référent technique en contexte bancaire et paiement (PCI-DSS) : architecture Clean / Hexagonale / DDD et industrialisation du delivery par agents IA (Claude Code, MCP).',
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
      context: 'Plateforme de paiement PCI-DSS. Modernisation de l’architecture et du delivery.',
      achievements: [
        'Conçu et piloté la V2 modulaire d’intégration des moyens de paiement (Google Pay, Apple Pay) : architecture hexagonale, ADRs, socle en production.',
        'Porté l’AI-augmented engineering dans l’équipe : socle de context engineering (CLAUDE.md, skills, MCP Jira) pour livrer des tickets de bout en bout par agent IA sous revue humaine ; POC d’ajout automatisé de moyens de paiement, industrialisation fin 2026.',
        'Refondu le connecteur Shopify (Node.js, Terraform, GCP) et livré le paiement mixte en production.',
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'GCP', 'Terraform', 'Claude Code', 'MCP', 'Clean Archi', 'DDD', 'PCI-DSS'],
    },
    {
      company: 'Conserto',
      client: 'SNCF Connect, Vecteur Plus',
      position: 'Senior Fullstack & Cloud Engineer',
      startDate: 'Jan. 2023',
      endDate: 'Déc. 2023',
      location: 'Nantes',
      context: 'Missions courtes à fort enjeu technique : Cloud et fiabilisation des déploiements.',
      achievements: [
        'SNCF Connect : modernisé l’infra Cloud et la stack front (Vite), refondu la pyramide de tests (Vitest, Playwright), fiabilisé les releases.',
        'Vecteur Plus : conçu et développé un bloc d’authentification centralisé (Node.js, React), déployé sur AWS via CDK.',
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
      context: 'Plateforme métier eSofi (regroupement de crédits), contexte bancaire critique.',
      achievements: [
        'Livré des évolutions fullstack (React, Node.js, GraphQL) en challengeant le besoin métier avec le produit.',
        'Déployé la stack sur Kubernetes, mis en place le monitoring (Grafana) et assuré le support N2 : continuité de service garantie.',
      ],
      technologies: ['Node.js', 'React', 'GraphQL', 'RabbitMQ', 'Kubernetes', 'Grafana'],
    },
  ],
  previousExperiences: [
    { period: '2020 – 2021', company: 'Conserto (EP)', position: 'Frontend Engineer', technologies: ['Angular', 'TypeScript', 'Docker'] },
    { period: '2019 – 2020', company: 'Fifty Truck', position: 'Fullstack Engineer JS / PHP', technologies: ['Laravel', 'Angular', 'Ionic'] },
    { period: '2017 – 2019', company: 'Digital Garden, Start-up Palace', position: 'Fullstack Engineer PHP / JS', technologies: ['Symfony', 'Drupal 8', 'Angular'] },
    { period: '2014 – 2016', company: 'CGI (alternance)', position: 'Fullstack Engineer e-commerce', technologies: ['Magento', 'Symfony 2', 'Zend'] },
  ],
  education: [
    { year: '2016', degree: 'Expert en informatique et S.I. (Bac+5)', school: 'EPSI Lille' },
    { year: '2013', degree: 'DUT Informatique (Bac+2)', school: 'IUT Lannion' },
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
