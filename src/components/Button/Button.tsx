import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
