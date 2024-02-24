import { renderFactoryComponents } from "@/utils/factory";
import { Box } from "@chakra-ui/react";

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
