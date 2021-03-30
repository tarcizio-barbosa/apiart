import { useRouter } from 'next/router';
import Logo from '../../components/Logo';
import styles from '../../styles/pages/pintura/Pintura.module.css';

export default function ArtComponent() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.artData}>
        <Logo />
        <a onClick={() => router.back()}>
          <img src="/backbutton.svg" className={styles.icon} />
        </a>
        <h1>Flowers in a Metal Vase</h1>
        <strong>Abraham Mignon</strong>
      </div>
      <div className={styles.artContent}>
        <h1>Sobre</h1>
        <article>
          Mignon, um pintor flores com natureza mórbida, veio de Frankfurt e
          morou em Utrecht. Suas pródigas flores de natureza mórbida são muito
          semelhantes às de seu mestre Jan Davidsz de Heem, mas são um pouco
          mais fortes em forma e cor.
          <br />
          Eles vêm da coleção da família Orange-Nassau e foram pendurados no
          Castelo Oranienstein em Diez, Alemanha, no século XVIII.
        </article>
        <p>
          Fonte: <a href="#">Google Arts & Culture</a>
        </p>
        <span>1670</span>
      </div>
    </div>
  );
}
