import { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
};

const Button = ({ children, onClick, variant }: Props) => {
  const className = variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
