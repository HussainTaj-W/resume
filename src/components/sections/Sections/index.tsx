import Section from "./Section";

interface Props {
  children: React.ReactNode[];
}

function Sections({ children }: Props) {
  return (
    <>
      {children.map((child, index) => (
        <Section key={`section-${index}`}>{child}</Section>
      ))}
    </>
  );
}

export default Sections;
