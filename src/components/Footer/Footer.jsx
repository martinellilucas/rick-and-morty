import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.frase}>
      Developed by{" "}
      <a
        style={{ textDecoration: "none" }}
        href="https://www.linkedin.com/in/martinellilucas8/"
      >
        Lucas Martinelli.
      </a>
    </footer>
  );
};

export default Footer;
