import { renderFactoryComponents } from "@/utils/factory";
import { Box } from "@chakra-ui/react";

export interface CatWalkProps {
  content?: Record<string, any>[];
}

export default function CatWalk({ content }: CatWalkProps) {
  return (
    <Box whiteSpace="nowrap" overflowX="auto">
      {content?.map((item, index) => (
        <Box
          key={`catwalk-${index}`}
          display="inline-block"
          my={1}
          mx={2}
          whiteSpace="normal"
        >
          {renderFactoryComponents(item)}
        </Box>
      ))}
    </Box>
  );
}
