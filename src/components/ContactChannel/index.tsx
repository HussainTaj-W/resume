import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text, Image } from "@chakra-ui/react";

import IContactChannel from "@/models/contact-channel";

import styles from "./styles.module.scss";

interface Props {
  data: IContactChannel;
}

function ContactChannel({ data }: Props) {
  return (
    <Box m={6} className={styles.channel}>
      <Box display="flex" alignItems="center">
        <Image src={data.image.src} alt={data.image.alt} boxSize="1em" mr={1} />
        <Text as="b" display="block">
          {data.name}
        </Text>
      </Box>
      <Link
        href={data.uri ?? "#"}
        ml="1em"
        pl={1}
        target={data.external ? "_blank" : "_self"}
      >
        {data.address}
        {data.external ? (
          <ExternalLinkIcon boxSize="0.8em" verticalAlign="center" />
        ) : null}
      </Link>
    </Box>
  );
}

export default ContactChannel;
