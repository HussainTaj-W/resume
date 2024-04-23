import { renderFactoryComponents } from "@/utils/factory";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import styles from "./styles.module.scss";

interface TimelineEntryProps {
  content: Record<string, any>;
}

function TimelineEntry({ content }: TimelineEntryProps) {
  const { from, to, institution, title, ...rest } = content;
  return (
    <AccordionItem
      className={`${styles.entry} timeline-entry`}
      p={0}
      pr={2}
      borderTop="none"
      borderBottom="none"
    >
      <Box>
        <AccordionButton pt={0}>
          <Box as="span" flex="1" textAlign="left">
            <Text as="em" className={styles.period}>
              {from} - {to}
            </Text>
            <Heading as="h2" size="md">
              {title}
            </Heading>
            <Text as="strong" display="block" mb={1}>
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
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>{...renderFactoryComponents(rest)}</AccordionPanel>
      </Box>
    </AccordionItem>
  );
}

export default TimelineEntry;
