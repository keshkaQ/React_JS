import menuItems from "./data";
import RouterLink from "@/shared/ui/RouterLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.to} className={styles.item}>
            <RouterLink to={item.to} className={styles.link}>
              {item.title}
            </RouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
