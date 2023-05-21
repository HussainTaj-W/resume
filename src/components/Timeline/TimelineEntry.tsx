import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

import { renderFactoryComponents } from "@/utils/factory";

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
            <Link href={institution.uri} target="_blank" ml={1}>
              <ExternalLinkIcon boxSize="0.8em" verticalAlign="center" />
            </Link>
          ) : null}
        </Heading>
        <Text as="strong" display="block" mb={1}>
          {title}
        </Text>
        {...renderFactoryComponents(rest)}

        {/* {data.skills.length ? (
        <Box mb={4} mt={2}>
          <SkillCollectionCompact skills={data.skills} />
        </Box>
      ) : null}
      <Box my={6} mr={2}>
        <CollapsibleDescription>{data.description}</CollapsibleDescription>
      </Box>
      {data.gallery.length ? <LineGallery images={data.gallery} /> : null} */}
        <Box m={4} />
      </Box>
    </Box>
  );
}

export default TimelineEntry;
