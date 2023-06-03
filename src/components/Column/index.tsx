import { Box } from "@chakra-ui/react";

import { renderFactoryComponents } from "@/utils/factory";

export interface ColumnProps {
  content: Record<string, any>[];
}

export default function Column({ content }: ColumnProps) {
  return (
    <Box>
      {...content.map((item) => <>{...renderFactoryComponents(item)}</>)}
    </Box>
  );
}
