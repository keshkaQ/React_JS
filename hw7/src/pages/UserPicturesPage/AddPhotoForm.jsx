import { useState } from "react";
import styles from "./AddPhotoForm.module.css";

export default function AddPhotoForm({ onAddPhoto }) {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    description: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "nickname":
        if (!value.trim()) return "Ник обязателен для заполнения";
        if (value.length < 3) return "Ник должен быть не менее 3 символов";
        return "";
      case "email":
        if (!value.trim()) return "Email обязателен для заполнения";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Введите корректный email адрес";
        return "";
      case "description":
        if (!value.trim()) return "Описание обязательно для заполнения";
        if (value.length > 200)
          return "Описание не должно превышать 200 символов";
        return "";
      case "imageUrl":
        if (!value.trim()) return "URL фотографии обязателен";
        if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(value))
          return "URL должен заканчиваться на .jpg, .jpeg, .png, .gif или .webp";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddPhoto({
      ...formData,
      id: Date.now(),
    });

    setFormData({
      nickname: "",
      email: "",
      description: "",
      imageUrl: "",
    });
    setErrors({});
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return (
      <button className={styles.addButton} onClick={() => setIsFormVisible(true)}>
        Добавить мое фото
      </button>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Добавить фотографию</h3>

      <div className={styles.formGroup}>
        <label htmlFor="nickname">Ник *</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          className={errors.nickname ? styles.errorInput : ""}
          placeholder="Введите ваш ник"
        />
        {errors.nickname && (
          <span className={styles.errorText}>{errors.nickname}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Электронный адрес *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.errorInput : ""}
          placeholder="example@email.com"
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="imageUrl">URL фотографии *</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className={errors.imageUrl ? styles.errorInput : ""}
          placeholder="https://example.com/photo.jpg"
        />
        {errors.imageUrl && (
          <span className={styles.errorText}>{errors.imageUrl}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Описание *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? styles.errorInput : ""}
          placeholder="Опишите вашу фотографию"
          rows={3}
        />
        {errors.description && (
          <span className={styles.errorText}>{errors.description}</span>
        )}
      </div>

      <div className={styles.formActions}>
        <button type="button" className={styles.cancelButton} onClick={() => setIsFormVisible(false)}>
          Отмена
        </button>
        <button type="submit" className={styles.submitButton}>
          Добавить фото
        </button>
      </div>
    </form>
  );
}
