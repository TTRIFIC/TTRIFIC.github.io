import React, { useRef, useState } from "react";
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
} from "./ContactElements";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    alert(
      "Thank you for contacting me, I will get back to you as soon as I can!"
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
            <FormInput
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="for">Subject</FormLabel>
            <FormInput
              type="text"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <FormLabel htmlFor="for">Message</FormLabel>
            <FormTextArea
              type="text"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <FormButton type="submit">Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
