import { Box, Center, Heading } from "@chakra-ui/react";

import ContactChannel from "@/components/ContactChannel";
import ContactForm from "@/components/ContactForm";
import data from "@/data/contact.yml";

import "./style.css";

function Contact() {
  return (
    <Box id="contact">
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        my={6}
        mr={4}
      >
        <Box>
          <Heading as="h1">Contact</Heading>
          {data.channels.map((contact, index) => (
            <ContactChannel key={`contact-${index}`} data={contact} />
          ))}
        </Box>

        <Box w="100%">
          <Center>
            <ContactForm />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
