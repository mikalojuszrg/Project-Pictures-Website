import { PropsWithChildren } from "react";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Topbar />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default MainLayout;
