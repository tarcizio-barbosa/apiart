import styles from '../styles/Components/ArtCard.module.css';

export default function ArtCard({ imgPath, artName, artAutor, artYear }) {
  return (
    <div className={styles.container}>
      <img src={imgPath} />
      <p className={styles.divider}>
        {artName} - {artAutor}
      </p>
      <p>{artYear}</p>
    </div>
  );
}
