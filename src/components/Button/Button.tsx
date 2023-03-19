import styles from "./Button.module.scss";

type ButtonProps = {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ variant, onClick, children }: ButtonProps) => {
  return (
    <button
      className={styles.button + " " + styles["button--" + variant]}
      onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
