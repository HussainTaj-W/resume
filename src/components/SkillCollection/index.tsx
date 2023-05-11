import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";

import Skill from "@/components/Skill";
import ISkillCollection from "@/models/skill-collection";

import "./style.css";

interface Props {
  data: ISkillCollection;
}

function SkillCollection({ data }: Props) {
  return (
    <Box m={6}>
      <Heading as="h2" fontSize="md" my={4}>
        {data.category}
      </Heading>
      <Wrap>
        {data.skills.map((skill, index) => (
          <WrapItem minW="150px" p={1} key={`${skill.id}-${index}`}>
            <Skill data={skill} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default SkillCollection;
