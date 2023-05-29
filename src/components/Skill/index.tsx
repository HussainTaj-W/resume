import { Box, Text, Image, Progress, Tag } from "@chakra-ui/react";

import ISkill from "@/types/skill";

import styles from "./styles.module.scss";

interface Props {
  data: ISkill;
  isCompact?: boolean;
}

function Skill({ data, isCompact = false }: Props) {
  const iconSize = isCompact ? "1em" : "1.5em";
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      className={styles.skill}
    >
      <Box display="flex" alignItems="center">
        <Image
          className={styles.image}
          boxSize={iconSize}
          objectFit="cover"
          mr={0.5}
          src={data.image.src}
          alt={data.image.alt}
          userSelect="none"
          height={iconSize}
          width={iconSize}
        />
        <Text fontSize={isCompact ? "sm" : "md"}>{data.name}</Text>
        {data.level && !isCompact ? (
          <Tag
            fontSize="xx-small"
            alignSelf="end"
            size="sm"
            p={1}
            m={1}
            className={styles.tag}
          >
            {data.level}
          </Tag>
        ) : null}
      </Box>
      {!isCompact && data.score ? (
        <Progress
          value={data.score}
          w="100%"
          size="xs"
          alignSelf="end"
          className={styles.score}
          aria-label="Skill score"
        />
      ) : null}
    </Box>
  );
}

export default Skill;