import { renderFactoryComponents } from "@/utils/factory";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

import styles from "./styles.module.scss";

interface TimelineEntryProps {
  content: Record<string, any>;
}

function TimelineEntry({ content }: TimelineEntryProps) {
  const { from, to, institution, title, ...rest } = content;
  return (
    <Box className={`${styles.entry} timeline-entry`}>
      <Box>
        <Text as="em" className={styles.period}>
          {from} - {to}
        </Text>
        <Heading as="h2" size="md">
          {institution.name}
          {institution.uri ? (
            <Link
              href={institution.uri}
              target="_blank"
              ml={1}
              aria-label={`Open reference for ${institution.name}`}
            >
              <ExternalLinkIcon boxSize="0.8em" verticalAlign="center" />
            </Link>
          ) : null}
        </Heading>
        <Text as="strong" display="block" mb={1}>
          {title}
        </Text>
        {...renderFactoryComponents(rest)}
        <Box m={4} />
      </Box>
    </Box>
  );
}

export default TimelineEntry;
