import { otherLandmarks } from "@/shared/data";
import RouterLink from "@/shared/ui/RouterLink";
import styles from "./OtherLandmarksPage.module.css";

export default function OtherLandmarksPage() {
  return (
    <section className="page">
      <article className="card">
        <h2 className="cardTitle">Другие достопримечательности</h2>
        <p className="cardText">
          Выберите карточку, чтобы открыть подробное описание конкретного места.
        </p>
      </article>

      <div className="cardGrid">
        {otherLandmarks.map((landmark) => (
          <article key={landmark.id} className={`card ${styles.card}`}>
            <img
              className={`cardImage ${styles.image}`}
              src={landmark.imageUrl}
            />
            <h3 className={styles.title}>{landmark.title}</h3>
            <p className="cardText">{landmark.shortDescription}</p>
            <RouterLink
              to={`/otherLandmarks/${landmark.id}`}
              className="linkButton"
            >
              Подробнее
            </RouterLink>
          </article>
        ))}
      </div>
    </section>
  );
}
