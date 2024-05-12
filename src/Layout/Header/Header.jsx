import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../Context/TourContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const {
    state: { user }, dispatch
  } = useContext(TourContext);
  console.log(user)

  const menuClass = isShowSidebar ? "mainmenu_wrapper" : "mobile_menu_wrapper";
  const container = navbar ? "scroller" : "navbar_container";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({type: 'storeUser'})
    });

    return unsubscribe;
  }, []);


  const hanldeSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('logged out successfully')
      dispatch({type: 'userLogout'})
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles[container]}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_area}>
            <img
              src={"https://azim.hostlin.com/Travic/assets/images/logo.png"}
              alt="Travik"
            />

            <button onClick={() => setIsShowSidebar(false)}>
               <TiThMenuOutline />
            </button>
          </div>

           <div className={!isShowSidebar ? 'fixed w-[100vw] h-[100vh] top-0 right-0 bg-black opacity-70 navback' : ''}></div> 

          <div className={styles[menuClass]}>

          <button className="absolute top-4 right-4 text-3xl text-orange-500 closeBtn" onClick={() => setIsShowSidebar(true)}>
              <MdOutlineClose />
            </button>


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
                    <NavLink
                      to={"/"}
                      style={({ isActive }) => {
                        return {
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/tourlist"}
                      style={({ isActive }) => {
                        return {
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      Tour List
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={"/about"}
                      style={({ isActive }) => {
                        return {
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      style={({ isActive }) => {
                        return {
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className={styles.signinup_btns}>
                {user ? 
                (
                  <NavLink>
                      <button onClick={hanldeSignout}>Log out</button>
                    </NavLink>
                )
                :
                (
                  <>
                    <NavLink
                      to={"/signup"}
                      style={({ isActive }) => {
                        return {
                          background: isActive && "none",
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      Register
                    </NavLink>
                    <NavLink
                      to={"/signin"}
                      style={({ isActive }) => {
                        return {
                          background: isActive && "none",
                          color: isActive && "#ff6b00",
                        };
                      }}
                    >
                      <button>Sign in</button>
                    </NavLink>
                  </>
                )}
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
