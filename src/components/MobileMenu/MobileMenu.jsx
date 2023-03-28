import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import { Header } from './MobileMenu.styled';
import styles from "../../styles/MobileMenu.module.css";
import { Container } from "../../components/App.styled";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={!isOpen ? styles.header_isClosed : styles.header_isOpen}>
      <Container>
        <div className={styles.header_wrapper}>
          <div>
            <NavLink className={styles.logo} to="/">
              Logo Here
            </NavLink>
          </div>
          <button className={styles.mobile_menu__button} onClick={handleToggle}>
            {isOpen ? (
              <svg width="24" height="24" className="icon">
                <use xlinkHref={`..images/sprite.svg#icon-close`} />
              </svg>
            ) : (
              <svg width="24" height="24" className="icon">
                <use xlinkHref={`..images/sprite.svg#icon-menu`} />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <>
            <nav className={styles.navigation}>
              <ul>
                <li className={styles.item}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/">Features</NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/">Blog</NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/">Shop</NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/">About</NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <ul className={styles.user_cart}>
              <li>
                <Link>
                  {" "}
                  <svg width="31" height="31" className="icon">
                    <use
                      width="33"
                      height="33"
                      xlinkHref={`..images/sprite.svg#icon-user`}
                    />
                  </svg>
                </Link>
              </li>
              <li>
                {" "}
                <Link>
                  {" "}
                  <svg width="31" height="31" className="icon">
                    <use
                      width="31"
                      height="31"
                      xlinkHref={`..images/sprite.svg#icon-cart`}
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Container>
    </header>
  );
};

export default MobileMenu;
