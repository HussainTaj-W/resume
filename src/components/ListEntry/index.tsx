import { Box, Heading, Text } from "@chakra-ui/react";

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
      </Heading>
      <Text as="strong" display="block" mb={1}>
        {data.title}
      </Text>
      {data.skills.length ? (
        <>
          <SkillCollectionCompact skills={data.skills} /> <Box m={2} />
        </>
      ) : null}
      <Box m={2} />
      <CollapsibleDescription>{data.description}</CollapsibleDescription>
      <Box m={4} />
      {data.gallery.length ? <LineGallery images={data.gallery} /> : null}
      <Box m={4} />
    </Box>
  );
}

export default ListEntry;
