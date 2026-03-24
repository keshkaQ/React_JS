import styles from "../styles/GeneralInfo.module.css";

export default function GeneralInfo(props) {
  const { clubName, cityName, dateOfFoundation, emblemUrl } = props;
  return (
    <div>
      <p className={styles.sectionTitle}>О клубе</p>
      <img className={styles.emblem} src={emblemUrl} alt="герб клуба" />
      <h2 className={styles.clubName}>{clubName}</h2>
      <p className={styles.info}>📍 {cityName}</p>
      <p className={styles.info}>📅 Основан: {dateOfFoundation}</p>
    </div>
  );
}
