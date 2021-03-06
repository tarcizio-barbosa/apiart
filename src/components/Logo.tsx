import Link from 'next/link';

import styles from '../styles/Components/Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <a>ApiArt</a>
      </Link>
    </div>
  );
}
