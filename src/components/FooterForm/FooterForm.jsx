import React from "react";
import {
  Input,
  NewsLetter,
  Button,
  Title,
  Form,
  FooterText,
} from "./FooterForm.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEmail } from "../../redux/newsLettersSlice";

// I save the user's email for further use with the backend in order to make a newsletter for users

const FooterForm = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveEmail(email));
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <NewsLetter>
      <Title>Email Submission Form</Title>
      <Form onSubmit={handleSubmit}>
        <label for="email-input">
          <Input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Your email address"
          />
        </label>
        <Button disabled={email.length <= 0} type="submit">
          Submit
        </Button>
      </Form>
      <FooterText>
        * Will send you weekly updates for your better tool management.
      </FooterText>
    </NewsLetter>
  );
};

export default FooterForm;
