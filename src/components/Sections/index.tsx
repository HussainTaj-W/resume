import Section from "./Section";

export interface SectionsProps {
  content: Record<string, any>[];
}

function Sections({ content }: SectionsProps) {
  return (
    <>
      {content.map((child, index) => (
        <Section key={`section-${index}`} content={child} />
      ))}
    </>
  );
}

export default Sections;
