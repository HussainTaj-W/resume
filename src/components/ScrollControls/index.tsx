import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { MutableRefObject, useCallback } from "react";

import styles from "./styles.module.css";

export interface ScrollControlsProps {
  containerRef: MutableRefObject<null>;
  children: React.ReactElement;
  stepOffset?: number;
}

export default function CatWalk({
  containerRef,
  children,
  stepOffset = 300,
}: ScrollControlsProps) {
  const handleScroll = useCallback(
    (value: number) => {
      const container = containerRef?.current;
      if (container) {
        // @ts-ignore
        container.scroll({
          // @ts-ignore
          left: container.scrollLeft + value,
          behavior: "smooth",
        });
      }
    },
    [containerRef],
  );

  return (
    <Box className={styles.controls}>
      <IconButton
        aria-label="previous"
        onClick={() => handleScroll(-stepOffset)}
      >
        <ChevronLeftIcon />
      </IconButton>

      {children}

      <IconButton aria-label="next" onClick={() => handleScroll(stepOffset)}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
