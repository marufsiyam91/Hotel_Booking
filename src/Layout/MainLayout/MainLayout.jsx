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
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
