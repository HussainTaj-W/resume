import TimelineEntry from "./TimelineEntry";

interface Props {
  children: React.ReactNode[];
}

function Timeline({ children }: Props) {
  return (
    <>
      {children.map((child, index) => (
        <TimelineEntry key={`timeline-entry-${index}`}>{child}</TimelineEntry>
      ))}
    </>
  );
}

export default Timeline;
