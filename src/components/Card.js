import Image from "next/image";
import work from "../../public/images/icon-work.svg";
import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={`${styles.activity} ${styles.work}`}>
        <Image
          className={styles.image}
          src={work}
          width="35"
          height="35"
          alt="activity"
        />
      </div>

      <div className={styles.content}>
        <div>
          <p>Work</p>
          <p>...</p>
        </div>
        <p>32hrs</p>
        <p> Last Week - 36hrs</p>
      </div>
    </div>
  );
}
