import TooltipTouch from "@/components/TooltipTouch";
import ISkill from "@/types/skill";
import { Box, Image, Progress, Tag, Text } from "@chakra-ui/react";

import styles from "./styles.module.scss";

interface Props {
  data: ISkill;
  type?: "full" | "compact" | "icon";
}

function Skill({ data, type = "full" }: Props) {
  const iconSize = type === "compact" ? "1em" : "1.5em";
  const isCompact = type === "compact";
  const isIcon = type === "icon";
  const isFull = type === "full";

  return (
    <TooltipTouch
      label={data.name}
      aria-label="A tooltip"
      isDisabled={!isIcon}
      placement="top"
      bg="white"
      color="black"
    >
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
            mr={isIcon ? 0 : 0.5}
            src={data.image.src}
            alt={data.image.alt}
            userSelect="none"
            height={iconSize}
            width={iconSize}
          />
          {!isIcon ? (
            <Text fontSize={isCompact ? "sm" : "md"}>{data.name}</Text>
          ) : null}
          {isFull && data.level ? (
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
        {isFull && data.score ? (
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
    </TooltipTouch>
  );
}

export default Skill;
