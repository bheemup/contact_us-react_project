import styles from "./button.module.css";

const Button = ({ icon, text, outline, ...rest }) => {
  return (
    <button
      {...rest}
      className={outline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
