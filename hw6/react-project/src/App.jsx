import clubs from "./data/clubs.js";
import ClubCard from "./components/ClubCard.jsx";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Футбольные клубы</h1>
      <div className={styles.clubsList}>
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            color={club.color}
            general={club.general}
            achievements={club.achievements}
            players={club.players}
          />
        ))}
      </div>
    </div>
  );
}
