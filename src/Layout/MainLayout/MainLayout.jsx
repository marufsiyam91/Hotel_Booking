import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
