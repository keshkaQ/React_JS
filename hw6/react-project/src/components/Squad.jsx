import styles from "../styles/Squad.module.css";

export default function Squad({ players }) {
  return (
    <div>
      <p className={styles.sectionTitle}>Состав</p>
      <ul className={styles.list}>
        {players.map((player, index) => (
          <li key={player.id} className={styles.item}>
            <span className={styles.number}>{index + 1}</span>
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
