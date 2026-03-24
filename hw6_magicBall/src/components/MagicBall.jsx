import { useState } from "react";
import styles from "../styles/MagicBall.module.css";

const answers = [
  "Бесспорно",
  "Предрешено",
  "Никаких сомнений",
  "Определённо да",
  "Можешь быть уверен",
  "Мне кажется — да",
  "Вероятнее всего",
  "Хорошие перспективы",
  "Знаки говорят — да",
  "Пока неясно",
  "Спроси позже",
  "Лучше не рассказывать",
  "Сейчас нельзя предсказать",
  "Сконцентрируйся и спроси снова",
  "Даже не думай",
  "Мой ответ — нет",
  "По моим данным — нет",
  "Перспективы не очень",
  "Весьма сомнительно",
];

export default function MagicBall() {
  const [answer, setAnswer] = useState("Задай вопрос и нажми на шар");

  const handleClick = () => {
    const random = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(random);
  };

  return (
    <div>
      <h1 className={styles.title}>🔮 Магический шар</h1>
      <div onClick={handleClick} className={styles.ball}>
        <div className={styles.innerCircle}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
