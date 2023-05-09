import { useContext } from "react";

import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import { ActiveSectionNameContext } from "@/components/ResumeContext";
import data from "@/data/header.json";
import { scrollToName } from "@/utils/scroll-handler";

import styles from "./styles.module.scss";

function Header() {
  const { setActiveSectionName } = useContext(ActiveSectionNameContext);

  return (
    <Box id="header" className={styles.header}>
      <Box display="flex" flexDirection="column" p={2}>
        <Box
          display="flex"
          m={4}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{
            base: "column-reverse",
            lg: "row",
          }}
        >
          <Box
            m={4}
            display="flex"
            flexDirection="column"
            alignItems={{
              base: "center",
              lg: "start",
            }}
          >
            <Heading
              as="h1"
              size={{
                base: "2xl",
                md: "4xl",
              }}
              textAlign="center"
            >
              {data.name}
            </Heading>
            <Text
              as="strong"
              fontSize={{
                base: "lg",
                md: "2xl",
              }}
              display="block"
              textAlign="center"
            >
              {data.title}
            </Text>
            <Text as="em">{data.years}</Text>
          </Box>
          <Box>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              height="100"
              width="100"
              objectFit="cover"
              ml={2}
              boxSize={{
                base: "200px",
                md: "300px",
              }}
            />
          </Box>
        </Box>
        <Text fontSize="2xl" textAlign="center" my={4}>
          &ldquo;{data.tagline}&rdquo;
        </Text>
        <Box m="auto">
          <Button
            variant="solid"
            onClick={() => {
              scrollToName("contact");
              setActiveSectionName("contact");
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
