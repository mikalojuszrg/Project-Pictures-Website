import { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
};

const Button = ({ children, onClick, variant }: Props) => {
  const modifierClass = `button--${variant}`;

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[modifierClass]}`}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
