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

import styles from "./styles.module.scss";

export interface FormspreeProps {
  id: string;
  response?: string;
}

function Formspree({ id }: FormspreeProps) {
  const [state, handleSubmit] = useForm(id);

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
        <Text>{response}</Text>
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
    <Box flex={1}>
      <Center>
        <Card
          m={2}
          size="lg"
          w="sm"
          variant="outline"
          className={styles.card}
          userSelect="none"
        >
          <CardBody p={10}>{state.succeeded ? response : form}</CardBody>
        </Card>
      </Center>
    </Box>
  );
}

export default Formspree;
