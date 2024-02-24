import { renderFactoryComponents } from "@/utils/factory";
import { Box } from "@chakra-ui/react";

export interface RowProps {
  content: Record<string, any>;
}

export default function Row({ content }: RowProps) {
  const components = renderFactoryComponents(content);

  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      my={6}
      mr={4}
    >
      {components}
    </Box>
  );
}
