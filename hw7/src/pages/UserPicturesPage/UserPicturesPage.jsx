import { useState } from "react";
import { userPictures } from "@/shared/data/landmarks.js";
import styles from "./UserPicturesPage.module.css";
import AddPhotoForm from "./AddPhotoForm";

export default function UserPicturesPage() {
  const [photos, setPhotos] = useState(userPictures);

  const handleAddPhoto = (newPhoto) => {
    setPhotos((prev) => [...prev, newPhoto]);
  };

  return (
    <section className="page">
      <article className="card">
        <h2 className="cardTitle">Фотогалерея пользователей</h2>
        <p className="cardText">
          Подборка изображений по основным локациям Нижнего Новгорода.
        </p>
      </article>

      <AddPhotoForm onAddPhoto={handleAddPhoto} />

      <div className={`cardGrid ${styles.gallery}`}>
        {photos.map((photo) => (
          <figure key={photo.id} className={`card ${styles.item}`}>
            <img
              className={`cardImage ${styles.image}`}
              src={photo.imageUrl}
              alt={photo.description}
            />
            <figcaption className={styles.caption}>
              <div className={styles.nickname}>{photo.nickname}</div>
              <div className={styles.description}>{photo.description}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
