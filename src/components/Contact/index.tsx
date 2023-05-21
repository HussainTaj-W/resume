import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text, Image } from "@chakra-ui/react";

import IImage from "@/types/image";

import styles from "./styles.module.scss";

export interface ContactProps {
  name: string;
  address: string;
  uri?: string | null;
  image: IImage;
  external?: boolean | null;
}

function Contact({ name, address, uri, image, external }: ContactProps) {
  return (
    <Box className={styles.channel}>
      <Box display="flex" alignItems="center">
        <Image
          src={image.src}
          alt={image.alt}
          boxSize="1em"
          mr={1}
          userSelect="none"
        />
        <Text as="b" display="block">
          {name}
        </Text>
      </Box>
      <Link
        href={uri ?? "#"}
        ml="1em"
        pl={1}
        target={external ? "_blank" : "_self"}
      >
        {address}
        {external ? (
          <ExternalLinkIcon boxSize="0.8em" verticalAlign="center" ml={1} />
        ) : null}
      </Link>
    </Box>
  );
}

export default Contact;
