import { renderFactoryComponents } from "@/utils/factory";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

import ScrollControls from "../ScrollControls";

export interface CatWalkProps {
  content?: Record<string, any>[];
}

export default function CatWalk({ content }: CatWalkProps) {
  const ref = useRef(null);

  return (
    <ScrollControls containerRef={ref} stepOffset={315}>
      <Box ref={ref} whiteSpace="nowrap" overflowX="auto">
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
    </ScrollControls>
  );
}
