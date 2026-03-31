import { landmarks } from "@/shared/data";
import RouterLink from "@/shared/ui/RouterLink";
import styles from "./LandmarkPage.module.css";

export default function LandmarkPage({ params }) {
  const { id } = params;
  const landmark = landmarks.find((item) => item.id === id);

  if (!landmark) {
    return (
      <section className="page">
        <article className="card">
          <h2 className="cardTitle">Достопримечательность не найдена</h2>
          <p className="cardText">
            Проверьте адрес страницы или вернитесь к списку.
          </p>
          <RouterLink to="/otherLandmarks" className="linkButton">
            К списку достопримечательностей
          </RouterLink>
        </article>
      </section>
    );
  }

  return (
    <section className="page">
      <article className={`card ${styles.detailCard}`}>
        <img
          className={`cardImage ${styles.image}`}
          src={landmark.imageUrl}
          alt={landmark.title}
        />
        <div className={styles.content}>
          <h2 className="cardTitle">{landmark.title}</h2>
          <p className="cardText">{landmark.description}</p>

          <dl className={styles.meta}>
            <div>
              <dt>Где находится</dt>
              <dd>{landmark.location}</dd>
            </div>
            <div>
              <dt>Период</dt>
              <dd>{landmark.period}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <RouterLink to="/otherLandmarks" className="linkButton">
              Назад к списку
            </RouterLink>
          </div>
        </div>
      </article>
    </section>
  );
}
