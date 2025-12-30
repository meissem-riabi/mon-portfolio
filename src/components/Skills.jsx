import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from 'react-icons/fa';
import { SiVite, SiJest } from 'react-icons/si';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <h1>Skills & Technologies</h1>
        <p className={styles.subtitle}>
          Technologies que j’ai apprises et utilisées durant le semestre
        </p>
      </div>

      <div className={styles.categories}>

        <div className={styles.category}>
          <h2>Languages</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <FaJsSquare />
              <span>JavaScript</span>
            </div>
            <div className={styles.iconItem}>
              <FaHtml5 />
              <span>HTML</span>
            </div>
            <div className={styles.iconItem}>
              <FaCss3Alt />
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className={styles.category}>
          <h2>Frameworks & Libraries</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <FaReact />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className={styles.category}>
          <h2>Tools</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <SiVite />
              <span>Vite</span>
            </div>
            <div className={styles.iconItem}>
              <FaGitAlt />
              <span>Git</span>
            </div>
            <div className={styles.iconItem}>
              <SiJest />
              <span>Jest</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
