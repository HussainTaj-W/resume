import { Box, Center, Divider, Link, Text } from "@chakra-ui/react";

import data from "@/data/footer.yml";

import styles from "./styles.module.scss";

function Footer() {
  if (!data.attributions.length) return <></>;

  return (
    <Box className={styles.footer}>
      <Divider />
      <Center>
        {data.attributions.map((attr) => (
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
