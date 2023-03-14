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
          width="20"
          height="20"
          alt="Work"
        />
      </div>

      <div className={styles.content}>
        <div>
          <div>Work</div>
          <p>...</p>
        </div>
        <div>32hrs</div>
        <div> Last Week - 36hrs</div>
      </div>
    </div>
  );
}
