import { Box, Heading } from "@chakra-ui/react";

import ListEntry from "@/components/ListEntry";
import Timeline from "@/components/Timeline";
import data from "@/data/education.yml";

import "./style.css";

function Education() {
  return (
    <Box id="education">
      <Heading as="h1" my={6}>
        Education
      </Heading>
      <Timeline>
        {data.entries.map((education, index) => (
          <ListEntry key={`education-${index}`} data={education} />
        ))}
      </Timeline>
    </Box>
  );
}

export default Education;
