import CategoryLink from '../components/CategoryLink';
import Logo from '../components/Logo';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.bgImage}>
      <div className={styles.container}>
        <Logo />
        <h1>Unindo conhecimento e tecnologia</h1>
        <p>Escolha uma categoria</p>
        <div className={styles.categoryContainer}>
          <CategoryLink path="/pintura">Pintura</CategoryLink>
          <CategoryLink path="/escultura">Escultura</CategoryLink>
          <CategoryLink path="/pintura">Literatura</CategoryLink>
        </div>
      </div>
    </div>
  );
}
