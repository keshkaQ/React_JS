import GeneralInfo from "./GeneralInfo";
import Achievements from "./Achievements";
import Squad from "./Squad";
import styles from "../styles/ClubCard.module.css";

export default function ClubCard(props) {
  const { general, achievements, players, color } = props;

  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <GeneralInfo {...general} />
        </div>
        <div className={styles.section}>
          <Achievements {...achievements} />
        </div>
        <div className={styles.section}>
          <Squad players={players} />
        </div>
      </div>
    </div>
  );
}
