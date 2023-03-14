import Image from "next/image";
import user from "../../public/images/image-jeremy.png";
import styles from "../styles/Profile.module.css";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div>
        <Image src={user} width={50} height={50} />
        <span>Report for</span>
        <h3>Jeremy Robson</h3>
      </div>
      <div>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthlt</button>
      </div>
    </div>
  );
}
