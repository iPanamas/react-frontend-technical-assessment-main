import React from "react";
import {
  BigElipse,
  DesctopBig,
  DesctopSmall,
  Section,
  SmallElipse,
  Sosial,
  Text,
  TitleOfCard,
} from "./ContactCard.styled";

import styles from "../../styles/ContactCard.module.css";
import ContactList from "../../components/ContactList/ContactList";

// ContactList is used on this page 2 times, so I moved it into a separate component so that it can be conveniently reused

const ContactCard = () => {
  return (
    <Section className="contact-card">
      <TitleOfCard>Contact Information</TitleOfCard>
      <Text>Say something to start a live chat!</Text>
      <ContactList />
      <ul className={styles.sosial_list}>
        <li>
          <Sosial
            className={styles["item__link"]}
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="30" height="30" className={styles.icon}>
              <use
                className={styles.icon_name}
                xlinkHref={`../sprite.svg#icon-sosial-1`}
              />
            </svg>
          </Sosial>
        </li>
        <li>
          <Sosial
            href="https://instagram.com"
            className={styles["item__link"]}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="30" height="30" className="icon">
              <use xlinkHref={`..images/sprite.svg#icon-sosial-2`} />
            </svg>
          </Sosial>
        </li>
        <li>
          <Sosial
            className={styles["item__link"]}
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="30" height="30" className="icon">
              <use xlinkHref={`..images/sprite.svg#icon-sosial-3`} />
            </svg>
          </Sosial>
        </li>
      </ul>

      <DesctopBig
        width="182"
        src={`../images/desctop-big.png`}
        alt="elipse-desctop"
      />
      <DesctopSmall
        width="138"
        src={`../images/desctop-small.png`}
        alt="elipse-small"
      />
      <BigElipse width="80" src={`../images/elipse-big.png`} alt="elipse-big" />
      <SmallElipse
        width="54"
        src={`../images/elipse-small.png`}
        alt="elipse-small"
      />
    </Section>
  );
};

export default ContactCard;
