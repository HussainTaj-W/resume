import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";

import Skill from "@/components/Skill";
import ISkillCollection from "@/models/skill-collection";

import styles from "./styles.module.scss";

interface Props {
  data: ISkillCollection;
}

function SkillCollection({ data }: Props) {
  return (
    <Box m={6} className={styles.collection}>
      <Heading as="h2" fontSize="md" my={4}>
        {data.category}
      </Heading>
      <Wrap>
        {data.skills.map((skill, index) => (
          <WrapItem
            minW="12rem"
            p={1}
            key={`${skill.id}-${index}`}
            className={styles["collection-item"]}
          >
            <Skill data={skill} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default SkillCollection;
