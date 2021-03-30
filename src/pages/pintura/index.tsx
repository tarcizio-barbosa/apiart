import Link from 'next/link';
import ArtCard from '../../components/ArtCard';
import Logo from '../../components/Logo';
import styles from '../../styles/pages/Pintura.module.css';

export default function Pintura() {
  return (
    <div className={styles.bgImage}>
      <Logo />
      <div className={styles.container}>
        <Link href="/" passHref>
          <img src="/backbutton.svg" className={styles.icon} />
        </Link>
        <h1>Pintura</h1>
        <section className={styles.slider}>
          <ArtCard
            artId="1"
            imgPath="/walter-langley-1883.png"
            artName="But Men Must Work and..."
            artAutor="Walter Langley"
            artYear="1883"
          />
          <ArtCard
            artId="2"
            imgPath="/abraham-mignon-1670.png"
            artName="Flowers in a Metal Vase"
            artAutor="Abraham Mignon"
            artYear="1670"
          />
        </section>
      </div>
    </div>
  );
}
