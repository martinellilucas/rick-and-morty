import styles from "./About.module.css";
import Card from "../Card/Card";
import imagen from "../assets/images/foto.jpg";
const About = () => {
  return (
    <div className={styles.container}>
      <Card
        name="Lucas Martinelli"
        gender="Male"
        species="Human"
        image={imagen}
        link={`https://github.com/martinellilucas`}
      ></Card>
      <h1 className={styles.title}>About us: </h1>
      <hr className={styles.separator} />
      <p className={styles.text}>
        Este sitio es una aplicación dinámina y responsive, que nos permite
        hacer requests a una API, para generar tarjetas con personajes de la
        serie Rick & Morty, mediante la información que nos brinda esta API.
        Esta aplicación fue desarrollada por Lucas Martinelli, durante el
        bootcamp Soy Henry...
      </p>
      <hr className={styles.separator} />
      <p className={styles.text}>
        This site is a dynamic and responsive application, which allows us to
        make requests to an API, to generate cards with characters from the Rick
        & Morty series, using the information provided by this API. This
        application was developed by Lucas Martinelli, during the bootcamp Soy
        Henry...
      </p>
      <hr className={styles.separator} />
      <a className={styles.link} href="https://github.com/martinellilucas">
        GitHub
      </a>
    </div>
  );
};

export default About;
