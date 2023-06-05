import { ReactNode, useState } from "react";

import { Box, Tooltip } from "@chakra-ui/react";

const TooltipTouch = ({
  children,
  ...restToolTipProps
}: {
  children: ReactNode;
  [key: string]: any;
}) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip isOpen={isLabelOpen} {...restToolTipProps}>
      <Box
        onMouseEnter={() =>
          setIsLabelOpen(true && !restToolTipProps.isDisabled)
        }
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true && !restToolTipProps.isDisabled)}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

export default TooltipTouch;
