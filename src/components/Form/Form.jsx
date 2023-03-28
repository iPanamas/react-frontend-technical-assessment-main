import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import {
  BigLetter,
  Button,
  CheckBoxesWrap,
  ContactForm,
  EveryCheckBox,
  FormWrapper,
  Input,
  InputWrap,
  Label,
  SmallLetter,
} from "./Form.styled";
import styles from "../../styles/Form.module.css";

//in this component, I save the data to the local storage so that if the user accidentally reloads the page and does not have time to send the data, everything is saved, I also removed the standard notification and made my own, so in my opinion the page looks better

const Form = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    radio: "option1",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    radio: "option1",
  });

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      setUserInfo({
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        radio: "option1",
        message: formData.message,
      });
    }
  }, []);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setActive(false);
    }
  };
  const handleRadioChange = (event) => {
    setUserInfo((prevState) => ({ ...prevState, radio: event.target.value }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]:
        type === "radio" ? { ...prevState[name], [value]: checked } : value,
    }));
    localStorage.setItem("formData", JSON.stringify(userInfo));
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!userInfo.name) {
      errors.name = "First Name is required";
    }

    if (!userInfo.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!userInfo.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\+?\d{8,}$/.test(userInfo.phone))
      errors.phone = "Please enter a valid phone number with the country code";

    if (!userInfo.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email))
      errors.email = "Invalid email address";

    if (!userInfo.message) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    dispatch(addContact(userInfo));
    localStorage.clear();
    setUserInfo({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      radio: "option1",
      message: "",
    });
    setFormErrors({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      radio: "option1",
    });
  };

  return (
    <FormWrapper>
      <ContactForm novalidate="novalidate" onSubmit={handleSubmit}>
        <InputWrap>
          {" "}
          <Label>
            <span
              className={active ? styles.input_name.active : styles.input_name}
            >
              First Name
            </span>
            <Input
              style={{
                "-webkit-box-shadow": "inset 0 0 0px 9999px white",
                "::-webkit-input-placeholder": {
                  backgroundColor: "transparent",
                },
              }}
              className={styles.input}
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formErrors.name && (
              <div className={styles.error_message}>{formErrors.name}</div>
            )}
          </Label>
          <Label>
            <span
              className={active ? styles.input_name.active : styles.input_name}
            >
              Last Name
            </span>
            <Input
              style={{
                "-webkit-box-shadow": "inset 0 0 0px 9999px white",
                "::-webkit-input-placeholder": {
                  backgroundColor: "transparent",
                },
              }}
              className={styles.input}
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formErrors.lastName && (
              <div className={styles.error_message}>{formErrors.lastName}</div>
            )}
          </Label>
          <Label>
            <span
              className={active ? styles.input_name.active : styles.input_name}
            >
              Email
            </span>
            <Input
              style={{
                "-webkit-box-shadow": "inset 0 0 0px 9999px white",
                "::-webkit-input-placeholder": {
                  backgroundColor: "transparent",
                },
              }}
              className={styles.input}
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formErrors.email && (
              <div className={styles.error_message}>{formErrors.email}</div>
            )}
          </Label>
          <Label>
            <span
              className={active ? styles.input_name.active : styles.input_name}
            >
              Phone Number
            </span>
            <Input
              style={{
                "-webkit-box-shadow": "inset 0 0 0px 9999px white",
                "::-webkit-input-placeholder": {
                  backgroundColor: "transparent",
                },
              }}
              className={styles.input}
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {formErrors.phone && (
              <div className={styles.error_message}>{formErrors.phone}</div>
            )}
          </Label>
        </InputWrap>

        <Label className={styles.input_wrap.check}>
          <span className={styles.name_checkboxes}>Select Subject?</span>
          <CheckBoxesWrap>
            <EveryCheckBox className={styles.input_group}>
              {" "}
              <input
                className={styles.input_check}
                type="radio"
                name="radio"
                value="option1"
                checked={userInfo.radio === "option1"}
                onChange={handleRadioChange}
              />
              <svg className={styles.option_check} width="16" height="15">
                <use
                  class="unchecked"
                  xlinkHref={`..images/sprite.svg#icon-unchecked`}
                ></use>
                <use
                  className={styles.checked}
                  xlinkHref={`..images/sprite.svg#icon-checked`}
                ></use>
              </svg>
              <span> General Inquiry</span>
            </EveryCheckBox>
            <label className={styles.input_wrap.check}>
              <EveryCheckBox className={styles.input_group}>
                {" "}
                <input
                  className={styles.input_check}
                  type="radio"
                  name="radio"
                  value="option2"
                  checked={userInfo.radio === "option2"}
                  onChange={handleRadioChange}
                />
                <svg className={styles.option_check} width="16" height="15">
                  <use
                    class="unchecked"
                    xlinkHref={`..images/sprite.svg#icon-unchecked`}
                  ></use>
                  <use
                    className={styles.checked}
                    xlinkHref={`..images/sprite.svg#icon-checked`}
                  ></use>
                </svg>
                <span> General Inquiry</span>
              </EveryCheckBox>
            </label>
            <label className={styles.input_wrap.check}>
              <EveryCheckBox className={styles.input_group}>
                {" "}
                <input
                  className={styles.input_check}
                  type="radio"
                  name="radio"
                  value="option3"
                  checked={userInfo.radio === "option3"}
                  onChange={handleRadioChange}
                />
                <svg className={styles.option_check} width="16" height="15">
                  <use
                    class="unchecked"
                    xlinkHref={`..images/sprite.svg#icon-unchecked`}
                  ></use>
                  <use
                    className={styles.checked}
                    xlinkHref={`..images/sprite.svg#icon-checked`}
                  ></use>
                </svg>
                <span> General Inquiry</span>
              </EveryCheckBox>
            </label>
            <label className={styles.input_wrap.check}>
              <EveryCheckBox className={styles.input_group}>
                <input
                  className={styles.input_check}
                  type="radio"
                  name="radio"
                  value="option4"
                  checked={userInfo.radio === "option4"}
                  onChange={handleRadioChange}
                />
                <svg className={styles.option_check} width="16" height="15">
                  <use
                    class="unchecked"
                    xlinkHref={`..images/sprite.svg#icon-unchecked`}
                  ></use>
                  <use
                    className={styles.checked}
                    xlinkHref={`..images/sprite.svg#icon-checked`}
                  ></use>
                </svg>
                <span> General Inquiry</span>
              </EveryCheckBox>
            </label>
          </CheckBoxesWrap>
        </Label>

        <Label>
          <span
            className={
              active ? styles.textarea_text.active : styles.textarea_text
            }
          >
            Message
          </span>
          <textarea
            className={styles.textarea}
            name="message"
            value={userInfo.message}
            onChange={handleChange}
            placeholder="Write your message.."
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {formErrors.message && (
            <div className={styles.error_message}>{formErrors.message}</div>
          )}
        </Label>

        <Button type="submit">Send Message</Button>
      </ContactForm>
      <BigLetter
        width="241"
        // src={`${process.env.PUBLIC_URL}/images/letter-big.png`}
        alt="letter-big"
      />
      <SmallLetter
        width="105"
        // src={`${process.env.PUBLIC_URL}/images/letter-small.png`}
        alt="letter"
      />
    </FormWrapper>
  );
};

export default Form;
