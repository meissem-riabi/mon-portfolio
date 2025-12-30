import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  
  {
    id: 2,
    title: " Lab 4",
    description:
      "Amélioration du Jest .",
    tech: ["Jest"],
    github: "https://github.com/amani817/Lab4_Jest",
    demo: ""
  },
  {
    id: 3,
    title: " Lab 5",
    description:
      "Version avancée d'une app.",
    tech: ["React"],
    github: "https://github.com/amani817/caw-labs/tree/lab2-setup/lab5/my-app",
    demo: ""
  },
  {
    id: 4,
    title: "Kanban Board – Lab 6",
    description:
      "Application Kanban complète avec architecture claire et séparation des responsabilités.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/meissem-riabi/kanban-board",
    demo: ""
  },
  {
    id: 5,
    title: "Application Météo",
    description:
      "Application météo affichant les conditions climatiques en temps réel à partir d’une API externe.",
    tech: ["React", "Vite", "Axios", "API Météo"],
    github: "https://github.com/meissem-riabi/lab-weather",
    demo: "https://weather-meissem.netlify.app"
  },
  {
    id: 6,
    title: "PMS – Gestion Hôtelière",
    description:
      "Système de gestion hôtelière (PMS) pour organiser les réservations et les services.",
    tech: ["Node.js", "Express.js"],
    github: "https://github.com/meissem-riabi",
    demo: ""
  },
  {
    id: 7,
    title: "Application Restaurant",
    description:
      "Application de gestion de restaurant couvrant les menus, commandes et organisation dans différentes wilayas d’Algérie.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/khatitaha/dam",
    demo: ""
  },
  {
    id: 8,
    title: "Site Voitures",
    description:
      "Site vitrine moderne dédié à la présentation de voitures avec une interface élégante et responsive.",
    tech: ["Html", "Css", "JS"],
    github: "https://github.com/meissem-riabi",
    demo: ""
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>Projets</h1>
        <p className={styles.subtitle}>
          Une sélection de mes projets et labs réalisés durant le semestre
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
