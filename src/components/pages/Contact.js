import Container from "../layout/Container";
import styles from "./Home.module.css";

function Contact() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Dérick Bitencourte da Silva</span>
      </h1>

      <p>derickbit7@gmail.com</p>
      <p>https://github.com/derickbit</p>
    </section>
  );
}

export default Contact;
