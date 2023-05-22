import TimelineEntry from "./TimelineEntry";

export interface TimelineProps {
  content: Record<string, any>[];
}

function Timeline({ content }: TimelineProps) {
  return (
    <>
      {content.map((entry, index) => (
        <TimelineEntry key={`timeline-entry-${index}`} content={entry} />
      ))}
    </>
  );
}

export default Timeline;
