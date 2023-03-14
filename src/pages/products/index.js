import Link from "next/link";
import styles from "../../styles/Products.module.css";

export default function Products() {
  return (
    <>
      <h1>Página de Produtos</h1>
      <div className={styles.products}>
        <Link href="/products/pants/redpants">Calças</Link>
        <Link href="/products/pants/bluepants">Calças</Link>
      </div>
    </>
  );
}
