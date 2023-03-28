import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { Container } from "../../components/App.styled";
import {
  Nav,
  NavList,
  NavLinkLogo,
  NavigationLink,
  ListItem,
  UserList,
  HeaderSvg,
} from "./AuthNav.steled";

// The navigation menu is made up of two components, each conditionally rendered. UseEffect, executed once, after which the first or second component is rendered

const AuthNav = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1439) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // I used Navlink because they have an active state
  return (
    <>
      {!isMobileView ? (
        <header>
          <Container>
            <Nav>
              <div>
                <NavLinkLogo to="/">Logo Here</NavLinkLogo>
              </div>

              <NavList>
                <ListItem>
                  <NavigationLink to="/">Home</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink to="/">Features</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink to="/">Blog</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink to="/">Shop</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink to="/">About</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink exact activeclassname="active" to="/contact">
                    Contact
                  </NavigationLink>
                </ListItem>
              </NavList>
              <UserList>
                {" "}
                <li>
                  <NavigationLink to="/">
                    {" "}
                    <HeaderSvg width="30" height="30" className="icon">
                      <use
                        width="31"
                        height="31"
                        xlinkHref="..images/sprite.svg#icon-user-main"
                      />
                    </HeaderSvg>
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/">
                    {" "}
                    <HeaderSvg width="31" height="31" className="icon">
                      <use
                        width="31"
                        height="31"
                        xlinkHref="..images/sprite.svg#icon-cart-main"
                      />
                    </HeaderSvg>
                  </NavigationLink>
                </li>
              </UserList>
            </Nav>
          </Container>
        </header>
      ) : (
        <MobileMenu />
      )}

      <Outlet />
    </>
  );
};

export default AuthNav;
