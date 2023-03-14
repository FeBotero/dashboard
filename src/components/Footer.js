import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Siga-nos nas redes sóciais :
      <Link href="https://www.linkedin.com/in/felipe-botero-dev/">
        Linkedin
      </Link>
    </div>
  );
}
