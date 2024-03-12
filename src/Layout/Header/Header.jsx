import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [navbar, setNavbar] = useState(false)

  const menuClass = isShowSidebar ? "mainmenu_wrapper" : "mobile_menu_wrapper";
  const container = navbar ? 'scroller' : 'navbar_container' ;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        setNavbar(true)
      } else{
        setNavbar(false)
      }

  })
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles[container]}>
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
                src={"https://azim.hostlin.com/Travic/assets/images/logo-2.png"}
                alt="Travik"
              />
            </div>

            <div className={styles.mainmenu_container}>
              <div className={styles.mainmenu}>
                <ul>
                  <li>
                    <NavLink to={"/"}>
                      <button>Home</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/tourlist"}>
                      <button>Tour List</button>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={"/about"}>
                      <button>About</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>
                      <button>Contact</button>
                    </NavLink>
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

              <div className={styles.social_links}>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <BsTwitterX />
                </div>
                <div>
                  <FaLinkedin />
                </div>
                <div>
                  <FaDiscord />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
