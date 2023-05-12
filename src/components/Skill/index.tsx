import { Box, Text, Image, Progress, Tag } from "@chakra-ui/react";

import ISkill from "@/models/skill";

interface Props {
  data: ISkill;
  isCompact?: boolean;
}

function Skill({ data, isCompact = false }: Props) {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Image
          boxSize={isCompact ? "1em" : "1.5em"}
          objectFit="cover"
          mr={0.5}
          src={data.image.src}
          alt={data.image.alt}
        />
        <Text fontSize={isCompact ? "sm" : "md"}>{data.name}</Text>
        {data.level && !isCompact ? (
          <Tag fontSize="xx-small" alignSelf="end" size="sm" p={1} m={1}>
            {data.level}
          </Tag>
        ) : null}
      </Box>
      {!isCompact && data.score ? (
        <Progress value={data.score} w="100%" size="xs" alignSelf="end" />
      ) : null}
    </Box>
  );
}

export default Skill;
