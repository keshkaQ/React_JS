import styles from "../styles/Achievements.module.css";

export default function Achievements(props) {
  const { countMedals, countCups, goalsScored } = props;
  return (
    <div>
      <p className={styles.sectionTitle}>Достижения</p>
      <div className={styles.statRow}>
        <span className={styles.statValue}>🏆 {countMedals}</span>
        <span className={styles.statLabel}>Титулов в лиге</span>
      </div>
      <div className={styles.statRow}>
        <span className={styles.statValue}>🥇 {countCups}</span>
        <span className={styles.statLabel}>Кубков</span>
      </div>
      <div className={styles.statRow}>
        <span className={styles.statValue}>⚽ {goalsScored}</span>
        <span className={styles.statLabel}>Голов забито</span>
      </div>
    </div>
  );
}
