import { FAVOURITES_PATH, HOME_PATH } from "../../routes/const";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      {location.pathname === HOME_PATH ? (
        <>
          <h1 className={styles.container__title}>Photos</h1>
          <Button variant="secondary" onClick={() => navigate(FAVOURITES_PATH)}>
            Favourite photos
          </Button>
        </>
      ) : (
        <>
          <h1 className={styles.container__title}>Favourites</h1>
          <Button variant="secondary" onClick={() => navigate(HOME_PATH)}>
            All photos
          </Button>
        </>
      )}
    </header>
  );
};

export default Topbar;
