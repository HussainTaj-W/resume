import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

import CollapsibleDescription from "@/components/CollapsibleDescription";
import LineGallery from "@/components/LineGallery";
import SkillCollectionCompact from "@/components/SkillCollectionCompact";
import IListEntry from "@/models/list-entry";

import styles from "./style.module.scss";

interface Props {
  data: IListEntry;
}

function ListEntry({ data }: Props) {
  return (
    <Box>
      <Text as="em" className={styles.period}>
        {data.from} - {data.to}
      </Text>
      <Heading as="h2" size="md">
        {data.institution.name}
        {data.institution.uri ? (
          <Link href={data.institution.uri} target="_blank" ml={1}>
            <ExternalLinkIcon boxSize="0.8em" verticalAlign="center" />
          </Link>
        ) : null}
      </Heading>
      <Text as="strong" display="block" mb={1}>
        {data.title}
      </Text>
      {data.skills.length ? (
        <Box mb={4} mt={2}>
          <SkillCollectionCompact skills={data.skills} />
        </Box>
      ) : null}
      <Box my={6} mr={2}>
        <CollapsibleDescription>{data.description}</CollapsibleDescription>
      </Box>
      {data.gallery.length ? <LineGallery images={data.gallery} /> : null}
      <Box m={4} />
    </Box>
  );
}

export default ListEntry;
