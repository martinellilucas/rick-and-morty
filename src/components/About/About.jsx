import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About us: </h1>
      <hr className={styles.separator} />
      <p className={styles.text}>
        Este sitio es una aplicación dinámina y responsive, que nos permite
        hacer requests a una API, para generar tarjetas con personajes de la
        serie Rick & Morty, mediante la información que nos brinda esta API.
        Esta aplicación fue desarrollada por Lucas Martinelli, durante el
        bootcamp Soy Henry...
      </p>
      <a className={styles.link} href="https://github.com/martinellilucas">
        GitHub
      </a>
      <hr className={styles.separator} />
    </div>
  );
};

export default About;
