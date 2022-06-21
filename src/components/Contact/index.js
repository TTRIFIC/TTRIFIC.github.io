import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormTextArea,
  ArrowBack,
  FormButton,
  Text,
} from "./ContactElements";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku2ew6q",
        "template_dtriky3",
        form.current,
        "vmG48YppFD2_DZcef"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Icon to="/">
        <ArrowBack />
      </Icon>
      <FormWrap>
        <FormContent>
          <Form action="#" ref={form} onSubmit={sendEmail}>
            <FormH1>Contact</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="text" name="name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" name="email" required />
            <FormLabel htmlFor="for">Subject</FormLabel>
            <FormInput type="text" name="subject" required />
            <FormLabel htmlFor="for">Message</FormLabel>
            <FormTextArea type="text" name="message" required />
            <FormButton type="submit">Send</FormButton>
            <Text>
              Thank you for contacting me! I will get back to you as soon as I
              can.
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
