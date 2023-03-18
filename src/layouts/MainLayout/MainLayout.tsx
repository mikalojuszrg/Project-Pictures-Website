import { PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
