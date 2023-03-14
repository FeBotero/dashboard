import Card from "@/components/Card";
import styles from "../styles/About.module.css";
import Profile from "@/components/Profile";

export default function About() {
  return (
    <>
      <h1>Pagina de About</h1>
      <div className={styles.container}>
        <div>
          <Profile />
        </div>
        <div className={styles.activities}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
