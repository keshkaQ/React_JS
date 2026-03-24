import styles from "./styles/App.module.css";
import MagicBall from "./components/MagicBall";
export default function App() {
  return (
    <div className={styles.wrapper}>
      <MagicBall />
    </div>
  );
}
