import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">AVOCADO</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">design</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">production</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">photography</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
