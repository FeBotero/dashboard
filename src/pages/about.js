import Card from "@/components/Card";
import styles from "../styles/About.module.css";
import Profile from "@/components/Profile";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.containerDiv}>
        <div className={styles.content}>
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
    </div>
  );
}
