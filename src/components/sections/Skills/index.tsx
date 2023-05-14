import { Box, Heading } from "@chakra-ui/react";

import SkillCollection from "@/components/SkillCollection";
import data from "@/data/skills.yml";

import "./style.css";

function Skills() {
  return (
    <Box id="skills">
      <Heading as="h1" my={6}>
        Skills
      </Heading>
      {data.map((skills, index) => (
        <SkillCollection key={`skills-collection-${index}`} data={skills} />
      ))}
    </Box>
  );
}

export default Skills;
