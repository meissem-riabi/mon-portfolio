import styles from '../styles/Home.module.css';
import { FaLaptopCode, FaReact, FaMobileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <section className={styles.hero} id="home">
      {/* Texte en arrière-plan */}
      <span className={styles.portfolioText}>PORTFOLIO</span>

      {/* Conteneur principal : photo + infos */}
      <div className={styles.heroContainer}>
        {/* Photo de profil */}
        <img
          src="/assets/photo.jpg"
          alt="Meissem Riabi"
          className={styles.photo}
        />

        {/* Contenu principal */}
        <div className={styles.content}>
          <h1 className={styles.name}>Meissem Riabi</h1>
          <h2 className={styles.role}>
      Développeur Front-End/Back-End & Designer 
    </h2>


          <p className={styles.bio}>
      Étudiant en développement web, spécialisé dans les technologies modernes 
      telles que <strong>React</strong>, <strong>TypeScript</strong>, 
      et les outils associés .
      <br /><br />
      Ce portfolio regroupe une sélection de projets personnels et académiques 
      réalisés avec rigueur, en mettant l’accent sur la performance, 
      l’expérience utilisateur et le code propre.
    </p>

          {/* Informations personnelles */}
          <div className={styles.info}>
            <h3>Informations personnelles</h3>
            <ul>
              <li>📍 Localisation : Algérie</li>
              <li>🎓 Études : Informatique / Développement Web</li>
              <li>💻 Technologies préférées : React, Node.js, Express.js</li>
              <li>⚡ Hobbies : Lecture, Voyage, Programmation</li>
            </ul>
          </div>

          {/* Mon Expertise */}
          <div className={styles.expertise}>
            <h3>Mon Expertise</h3>

            <div className={styles.expertSection}>
              <h4>
                <FaLaptopCode style={{ marginRight: '8px', color: '#38bdf8' }}/>
                Software Development
              </h4>
              <p>Expérimenté en programmation fonctionnelle et orientée objet : Dart, Python, Java, JavaScript, TypeScript.</p>
            </div>

            <div className={styles.expertSection}>
              <h4>
                <FaReact style={{ marginRight: '8px', color: '#61dafb' }}/>
                Frontend Dev
              </h4>
              <p>React, NextJS. Passionné par l’UI/UX. Plus de 5 ans d’expérience en HTML, CSS, JS, React et NextJS.</p>
            </div>

            <div className={styles.expertSection}>
              <h4>
                <FaMobileAlt style={{ marginRight: '8px', color: '#ff6f61' }}/>
                Flutter Dev
              </h4>
              <p>Développement d’applications mobiles hybrides Android et iOS avec Flutter.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className={styles.cta}>
        <a href="#projects" className={styles.primaryBtn}>Voir mes projets</a>
        <a href="#contact" className={styles.secondaryBtn}>Me contacter</a>
      </div>

      {/* Table des matières */}
      <nav className={styles.tableOfContents}>
        <h3>Table des matières</h3>
        <div className={styles.pills}>
          <a href="#home" className={styles.pill}>Introduction</a>
          <a href="#projects" className={styles.pill}>Projets</a>
          <a href="#skills" className={styles.pill}>Compétences</a>
          <a href="#contact" className={styles.pill}>Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default Home;
