import { Accordion } from "@chakra-ui/react";

import TimelineEntry from "./TimelineEntry";

export interface TimelineProps {
  content: Record<string, any>[];
}

function Timeline({ content }: TimelineProps) {
  return (
    <Accordion allowMultiple>
      {content.map((entry, index) => (
        <TimelineEntry key={`timeline-entry-${index}`} content={entry} />
      ))}
    </Accordion>
  );
}

export default Timeline;
