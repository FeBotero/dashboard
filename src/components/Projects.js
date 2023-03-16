import styles from "../styles/About.module.css";
import Card from "@/components/Card";

const url = "https://api.github.com/users/FeBotero/repos";

export async function getStaticProps() {
  const data = await fetch(url);
  console.log(data);
  const repos = await data.json();
  console.log(repos);

  return {
    props: { repos },
  };
}

export default function Projects({ repos }) {
  return (
    <div className={styles.activities}>
      {repos?.map((repo, index) => (
        <Card key={`${repo.name}${index}`} />
      ))}
    </div>
  );
}
