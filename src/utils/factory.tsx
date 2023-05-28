import { ReactElement } from "react";

import { deepCopy } from "deep-copy-ts";

import Collection, { CollectionProps } from "@/components/Collection";
import Contact, { ContactProps } from "@/components/Contact";
import Description, { DescriptionProps } from "@/components/Description";
import Footer, { FooterProps } from "@/components/Footer";
import Formspree, { FormspreeProps } from "@/components/Formspree";
import Gallery, { GalleryProps } from "@/components/Gallery";
import Header, { HeaderProps } from "@/components/Header";
import Row, { RowProps } from "@/components/Row";
import Sections, { SectionsProps } from "@/components/Sections";
import Skills, { SkillsProps } from "@/components/Skills";
import Timeline, { TimelineProps } from "@/components/Timeline";
import appData from "@/data/data.yml";

export type FactoryComponentProps = {
  name: string;
  props: Record<string, any>;
};

export default function FactoryComponent({
  name,
  props,
}: FactoryComponentProps): ReactElement {
  let data = props;

  if (props.references === "skills") {
    data = deepCopy(props);
    data.content = (data.content as (string | number)[]).map((id) => {
      const skill = appData.skills.find((skill) => skill.id === id);
      if (!skill) {
        throw Error(
          `Skill ID ${id} does not have a corresponding definition in data.`
        );
      }
      return skill;
    });
  }

  switch (name) {
    case "header":
      return <Header {...(data as HeaderProps)} />;
    case "footer":
      return <Footer {...(data as FooterProps)} />;
    case "timeline":
      return <Timeline {...(data as TimelineProps)} />;
    case "description":
      return <Description {...(data as DescriptionProps)} />;
    case "gallery":
      return <Gallery {...(data as GalleryProps)} />;
    case "skills":
      return <Skills {...(data as SkillsProps)} />;
    case "collection":
      return <Collection {...(data as CollectionProps)} />;
    case "contact":
      return <Contact {...(data as ContactProps)} />;
    case "formspree":
      return <Formspree {...(data as FormspreeProps)} />;
    case "sections":
      return <Sections {...(data as SectionsProps)} />;
    case "row":
      return <Row {...(data as RowProps)} />;

    default:
      throw new Error(`Unknown component name: ${name}`);
  }
}

export function renderFactoryComponents(
  content: Record<string, any>
): JSX.Element[] {
  return Object.entries(content).map((entry, index) => {
    return (
      <FactoryComponent
        key={`factory-${index}`}
        name={entry[0]}
        props={entry[1]}
      />
    );
  });
}
