import React from "react";
import { NavLink } from "react-router-dom";
import {
  ContactItem,
  Footer,
  FooterContainer,
  FooterDescWrap,
  FooterLogo,
  LinksWrap,
  ReachAndCompanyWrap,
  ReachWrap,
  Subtitle,
} from "./Footer.styled";
import styles from "../../styles/ContactCard.module.css";

// import ContactList from 'components/ContactList/ContactList';
import ContactList from "../ContactList/ContactList";
import FooterForm from "./../FooterForm/FooterForm";

const FooterOfApp = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterLogo>
          <NavLink to="/">Logo Here</NavLink>
        </FooterLogo>
        <FooterDescWrap>
          {" "}
          <ReachAndCompanyWrap>
            <ReachWrap>
              <Subtitle>Reach us</Subtitle>
              <ContactList className={styles["contact-card--left-aligment"]} />
            </ReachWrap>
            <div>
              <Subtitle>Company</Subtitle>
              <ul>
                <ContactItem>
                  <NavLink to="/">About</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/contact">contact</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Blog</NavLink>
                </ContactItem>
              </ul>
            </div>
          </ReachAndCompanyWrap>
          <LinksWrap>
            <div>
              <Subtitle>Legal</Subtitle>
              <ul>
                <ContactItem>
                  <NavLink to="/">Privacy Policy</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Terms & Services</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Terms of Use</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Refund Policy</NavLink>
                </ContactItem>
              </ul>
            </div>
            <div>
              <Subtitle>Quick Links</Subtitle>
              <ul>
                <ContactItem>
                  <NavLink to="/">Techlabz Keybox</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Downloads</NavLink>
                </ContactItem>
                <ContactItem>
                  <NavLink to="/">Forum</NavLink>
                </ContactItem>
              </ul>
            </div>
          </LinksWrap>
          <FooterForm />
        </FooterDescWrap>
      </FooterContainer>
    </Footer>
  );
};

export default FooterOfApp;
