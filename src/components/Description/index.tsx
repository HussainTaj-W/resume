import { Box, Button } from "@chakra-ui/react";
import { Collapse } from "@kunukn/react-collapse";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { HTML_TO_CHAKRA_COMPONENTS_MAP } from "./markdown-utils";
import styles from "./styles.module.scss";

export interface DescriptionProps {
  content: string;
  threshold?: number;
}

function Description({ content, threshold = 5 }: DescriptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isAlwaysOpen = content.split("\n").length <= threshold;

  const collapseButton = (
    <Button
      size="xs"
      variant="link"
      p="1"
      onClick={() => setIsOpen(!isOpen)}
      className={styles["more-button"]}
    >
      {isOpen ? "see less" : "see more"}
    </Button>
  );

  return (
    <Box my={4}>
      <Box className={styles.content}>
        <Box
          className={
            isOpen || isAlwaysOpen
              ? styles["content-open"]
              : styles["content-closed"]
          }
        >
          <Collapse isOpen={isOpen || isAlwaysOpen} collapseHeight="150px">
            <ReactMarkdown components={HTML_TO_CHAKRA_COMPONENTS_MAP}>
              {content}
            </ReactMarkdown>
          </Collapse>
        </Box>
      </Box>
      {isAlwaysOpen ? null : collapseButton}
    </Box>
  );
}

export default Description;
