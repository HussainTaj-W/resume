import { Box, Heading } from "@chakra-ui/react";

import { renderFactoryComponents } from "@/utils/factory";

import styles from "./styles.module.scss";

interface SectionProps {
  content: Record<string, any>;
}

function Section({ content }: SectionProps) {
  const { title, id, ...rest } = content;

  return (
    <Box as="section" id={id} className={styles.entry}>
      <Heading as="h1" my={6}>
        {title}
      </Heading>
      {...renderFactoryComponents(rest)}
    </Box>
  );
}

export default Section;
