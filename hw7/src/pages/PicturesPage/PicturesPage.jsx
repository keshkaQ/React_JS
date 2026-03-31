import { landmarks } from "@/shared/data";
import styles from "./PicturesPage.module.css";

export default function PicturesPage() {
  return (
    <section className="page">
      <article className="card">
        <h2 className="cardTitle">Фотогалерея</h2>
        <p className="cardText">
          Подборка изображений по основным локациям Нижнего Новгорода.
        </p>
      </article>

      <div className={`cardGrid ${styles.gallery}`}>
        {landmarks.map((landmark) => (
          <figure key={landmark.id} className={`card ${styles.item}`}>
            <img
              className={`cardImage ${styles.image}`}
              src={landmark.imageUrl}
            />
            <figcaption className={styles.caption}>{landmark.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
