import {
  List,
  Location,
} from "../../components/ContactCard/ContactCard.styled";
import React from "react";
import styles from "../../styles/ContactCard.module.css";

const ContactList = (props) => {
  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%A8%D0%90/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r",
      "_blank"
    );
  };
  return (
    <List className={props.className}>
      <li className={styles.item}>
        <a href="tel:+10123456789" className={styles["item__link"]}>
          <svg className={styles.icon} width="24" height="24">
            <use xlinkHref={`..images/sprite.svg#icon-call`} />
          </svg>
          <p className={styles["item__text"]}>+1012 3456 789</p>
        </a>
      </li>
      <li className={styles.item}>
        <a href="mailto:ygaginazy@gmail.com" className={styles["item__link"]}>
          <svg width="24" height="24" className="icon">
            <use xlinkHref={`..images/sprite.svg#icon-email`} />
          </svg>
          <p className={styles["item__text"]}>demo@gmail.com</p>
        </a>
      </li>
      <li className={styles.item} onClick={handleLocation}>
        <svg width="24" height="24" className="icon">
          <use xlinkHref={`..images/sprite.svg#icon-location`} />
        </svg>
        <Location className={styles["item__text"]}>
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </Location>
      </li>
    </List>
  );
};

export default ContactList;
