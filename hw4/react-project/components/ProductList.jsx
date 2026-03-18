export default function ProductList() {
  const ingredients = [
    { name: "Говядина", amount: "500 г" },
    { name: "Капуста белокочанная", amount: "300 г" },
    { name: "Картофель", amount: "4 шт." },
    { name: "Свёкла", amount: "2 шт." },
    { name: "Морковь", amount: "1 шт." },
    { name: "Лук репчатый", amount: "1 шт." },
    { name: "Томатная паста", amount: "2 ст. л." },
    { name: "Чеснок", amount: "2 зубчика" },
    { name: "Растительное масло", amount: "3 ст. л." },
    { name: "Соль, перец", amount: "по вкусу" },
    { name: "Лавровый лист", amount: "2 шт." },
  ];

  return (
    <div className="recipe-section">
      <h2>Ингредиенты</h2>
      <ul className="ingredients-list">
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.name} - <strong>{item.amount}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
