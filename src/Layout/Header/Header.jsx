import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const menuClass = isShowSidebar ? "mainmenu_wrapper" : "mobile_menu_wrapper";

  return (
    <div className="">
      <div className={styles.navbar_container}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_area}>
            <img
              src={"https://azim.hostlin.com/Travic/assets/images/logo.png"}
              alt="Travik"
            />

            <button onClick={() => setIsShowSidebar(!isShowSidebar)}>
              {isShowSidebar ? <TiThMenuOutline /> : <MdOutlineClose />}
            </button>
          </div>

          <div className={styles[menuClass]}>
            <div className={styles.sidebar_logo}>
              <img
                src={"https://azim.hostlin.com/Travic/assets/images/logo.png"}
                alt="Travik"
              />
            </div>

            <div className={styles.mainmenu_container}>
              <div className={styles.mainmenu}>
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/tourlist"}>Tour List</NavLink>
                  </li>

                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                </ul>
              </div>

              <div className={styles.signinup_btns}>
                <NavLink to={"/signup"}>
                  <button>Register</button>
                </NavLink>
                <NavLink to={"/signin"}>
                  <button>Sign in</button>
                </NavLink>
              </div>
            </div>

            <div className={styles.contact_info}>
              <h3>Contact info</h3>
              <p>Chicago 12, Melborne City, USA</p>
              <p>+88 01682648101</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
