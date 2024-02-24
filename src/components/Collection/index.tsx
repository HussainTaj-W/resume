import { renderFactoryComponents } from "@/utils/factory";
import { Box, Heading } from "@chakra-ui/react";

import styles from "./styles.module.scss";

export interface CollectionProps {
  content: Record<string, any>[];
}

export default function Collection({ content }: CollectionProps) {
  return (
    <Box m={6} className={styles.collection}>
      {content.map(({ title, ...rest }, index) => (
        <Box key={`item-${title}-${index}`}>
          <Heading as="h2" fontSize="md" my={4}>
            {title}
          </Heading>
          {...renderFactoryComponents(rest)}
        </Box>
      ))}
    </Box>
  );
}
