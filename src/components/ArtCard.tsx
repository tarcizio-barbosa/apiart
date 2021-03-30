import Link from 'next/link';
import styles from '../styles/Components/ArtCard.module.css';

export default function ArtCard({
  imgPath,
  artName,
  artAutor,
  artYear,
  artId,
}) {
  return (
    <Link href={`/pintura/${artId}`}>
      <div className={styles.container}>
        <img src={imgPath} />
        <p className={styles.divider}>
          {artName} - {artAutor}
        </p>
        <p>{artYear}</p>
      </div>
    </Link>
  );
}
