import { mainLandmark } from "@/shared/data";
import RouterLink from "@/shared/ui/RouterLink";
import styles from "./MainLandmarkPage.module.css";

export default function MainLandmarkPage() {
  return (
    <section className="page">
      <article className={`card ${styles.mainCard}`}>
        <img
          className={`cardImage ${styles.image}`}
          src={mainLandmark.imageUrl}
        />
        <div className={styles.content}>
          <h2 className="cardTitle">{mainLandmark.title}</h2>
          <p className="cardText">{mainLandmark.description}</p>
          <dl className={styles.meta}>
            <div>
              <dt>Район</dt>
              <dd>{mainLandmark.location}</dd>
            </div>
            <div>
              <dt>Период</dt>
              <dd>{mainLandmark.period}</dd>
            </div>
          </dl>
          <RouterLink to="/pictures" className="linkButton">
            Открыть фотогалерею
          </RouterLink>
        </div>
      </article>
    </section>
  );
}
