import { Wrap, WrapItem } from "@chakra-ui/react";

import Skill from "@/components/Skill";
import ISkill from "@/types/skill";

import styles from "./styles.module.scss";

export interface SkillsProps {
  type: "compact" | "normal";
  content: ISkill[];
}

function Skills({ type, content }: SkillsProps) {
  const isCompact = type === "compact";

  return (
    <Wrap>
      {content.map((skill, index) => (
        <WrapItem
          minW={isCompact ? "auto" : "12rem"}
          p={isCompact ? 0 : 1}
          key={`${skill.id}-${index}`}
          className={styles.skill}
        >
          <Skill data={skill} isCompact={isCompact} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default Skills;
