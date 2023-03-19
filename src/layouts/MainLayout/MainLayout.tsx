import { PropsWithChildren } from "react";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Topbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
