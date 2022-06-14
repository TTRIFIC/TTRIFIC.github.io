import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Matthew Beckerman</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Contact</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Send</FormButton>
            <Text>Thank you for contacting me! I will reply ASAP.</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
