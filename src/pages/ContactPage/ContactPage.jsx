import React from "react";
import {
  Contact,
  ContactWrapper,
  Text,
  Title,
  Wrapper,
} from "./ContactPage.styled";
import { Container } from "../../components/App.styled";

import ContactCard from "../../components/ContactCard/ContactCard";
import Form from "../../components/Form/Form";

const ContactPage = ({ handleChange, handleSubmit }) => {
  return (
    <ContactWrapper>
      <Container>
        <Contact>
          <Title Title>Contact Us</Title>
          <Text>Any question or remarks? Just write us a message!</Text>
          <Wrapper>
            <ContactCard />
            <Form handleChange={handleChange} handleSubmit={handleSubmit} />
          </Wrapper>
        </Contact>
      </Container>
    </ContactWrapper>
  );
};

export default ContactPage;
