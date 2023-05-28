import React, { useContext } from "react";

import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import { ActiveSectionNameContext } from "@/components/ResumeContext";
import IHeader from "@/types/header";
import { scrollToName } from "@/utils/scroll-handler";

import styles from "./styles.module.scss";

export type HeaderProps = IHeader & React.HTMLAttributes<HTMLElement>;

function Header(props: HeaderProps) {
  const { setActiveSectionName } = useContext(ActiveSectionNameContext);

  return (
    <Box id="header" as="header" className={styles.header}>
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
          className={styles["header-identity"]}
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
            <Heading as="h1" size="2xl" textAlign="center">
              {props.name}
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
              {props.title}
            </Text>
            <Text as="em">{props.years}</Text>
          </Box>
          <Box>
            <Image
              src={props.image.src}
              alt={props.image.alt}
              objectFit="cover"
              ml={2}
              boxSize={{
                sm: "150px",
                md: "200px",
                lg: "300px",
              }}
              userSelect="none"
              height={100}
              width={100}
            />
          </Box>
        </Box>
        <Text fontSize="2xl" textAlign="center" my={4}>
          &ldquo;{props.tagline}&rdquo;
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
