import CategoyLink from '../components/CategoyLink';
import Logo from '../components/Logo';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo />
      <h1>Unindo conhecimento e tecnologia</h1>
      <p>Escolha uma categoria</p>
      <div>
        <CategoyLink path="/pintura">Pintura</CategoyLink>
        <CategoyLink path="/escultura">Escultura</CategoyLink>
        <CategoyLink path="/pintura">Literatura</CategoyLink>
      </div>
    </div>
  );
}
