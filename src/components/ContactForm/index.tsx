import React from "react";

import { CheckCircleIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

import data from "@/data/contact.yml";

import styles from "./styles.module.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm(data.messageMe.id);

  if (!data.messageMe.id) return null;

  let response = <></>;

  if (state.succeeded) {
    response = (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        h="100%"
      >
        <CheckCircleIcon display="block" color="green.400" />
        <Text> {data.messageMe.response}</Text>
      </Box>
    );
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column">
        <Text textAlign="center" mb={5}>
          <EmailIcon /> send me a message
        </Text>
        <FormControl my={2}>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email (Optional)"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormControl>
        <FormControl my={2}>
          <Textarea id="message" name="message" placeholder="Message" />
          <FormErrorMessage>
            <ValidationError
              debug
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormErrorMessage>
        </FormControl>
        <Center mt={8}>
          <Button type="submit" disabled={state.submitting}>
            Send
          </Button>
        </Center>
      </Box>
    </form>
  );
  return (
    <Card m={2} size="lg" w="sm" variant="outline" className={styles.card}>
      <CardBody p={10}>{state.succeeded ? response : form}</CardBody>
    </Card>
  );
}

export default ContactForm;
