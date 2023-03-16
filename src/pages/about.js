import Card from "@/components/Card";
import styles from "../styles/About.module.css";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.containerDiv}>
        <div className={styles.content}>
          <Profile />
        </div>
        <Projects />
      </div>
    </div>
  );
}
