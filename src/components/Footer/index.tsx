import IFooter from "@/types/footer";
import { Box, Center, Divider, Link, Text } from "@chakra-ui/react";

import styles from "./styles.module.scss";

export type FooterProps = IFooter & React.HTMLAttributes<HTMLElement>;

function Footer(props: FooterProps) {
  if (!props.attributions.length) return <></>;

  return (
    <Box className={styles.footer} as="footer">
      <Divider />
      <Center>
        {props.attributions.map((attr) => (
          <Box mx={1} key={attr.whom.url}>
            <Text as="i" fontSize="x-small">
              {attr.what}
              <Link target="_blank" href={attr.whom.url}>
                {attr.whom.name}
              </Link>
            </Text>
          </Box>
        ))}
      </Center>
    </Box>
  );
}

export default Footer;
