import Skill from "@/components/Skill";
import ISkill from "@/types/skill";
import { Wrap, WrapItem } from "@chakra-ui/react";

import styles from "./styles.module.scss";

export interface SkillsProps {
  type: "compact" | "full" | "icon";
  content: ISkill[];
}

function Skills({ type, content }: SkillsProps) {
  const isCompact = type === "compact" || type === "icon";

  return (
    <Wrap className={isCompact ? styles["skill-wrapper-collapsed"] : ""}>
      {content.map((skill, index) => (
        <WrapItem
          minW={isCompact ? "auto" : "12rem"}
          p={isCompact ? 0 : 1}
          m={isCompact ? 0 : 1}
          key={`${skill.id}-${index}`}
          className={`${styles.skill} ${isCompact ? styles["skill-collapsed"] : ""}`}
        >
          <Skill data={skill} type={type} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default Skills;
