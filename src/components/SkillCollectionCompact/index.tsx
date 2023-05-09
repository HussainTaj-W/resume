import { Wrap, WrapItem } from "@chakra-ui/react";

import Skill from "@/components/Skill";
import ISkill from "@/models/skill";

interface Props {
  skills: ISkill[];
}

function SkillCollectionCompact({ skills }: Props) {
  return (
    <Wrap>
      {skills.map((skill, index) => (
        <WrapItem key={`${skill.id}-${index}`}>
          <Skill data={skill} isCompact />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default SkillCollectionCompact;
