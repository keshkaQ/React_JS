import styles from "./Button.module.scss";
export default function Button(props) {
  const {
    className = "",
    type = "button",
    children,
    isDisabled,
    onClick,
  } = props;
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
