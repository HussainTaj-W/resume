import { Box, Heading } from "@chakra-ui/react";

import ListEntry from "@/components/ListEntry";
import Timeline from "@/components/Timeline";
import data from "@/data/experience.json";

import "./style.css";

function Experience() {
  return (
    <Box id="experience">
      <Heading as="h1" my={6}>
        Experience
      </Heading>
      <Timeline>
        {data.entries.map((experience, index) => (
          <ListEntry key={`experience-${index}`} data={experience} />
        ))}
      </Timeline>
    </Box>
  );
}

export default Experience;
