import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Box, Button } from "@chakra-ui/react";
import Collapse from "@kunukn/react-collapse";

import { HTML_TO_CHAKRA_COMPONENTS_MAP } from "./markdown-utils";
import styles from "./styles.module.scss";

interface Props {
  children: string;
  threshold?: number;
}

function CollapsibleDescription({ children, threshold = 5 }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isAlwaysOpen = children.split("\n").length <= threshold;

  const collapseButton = (
    <Button size="xs" variant="link" p="1" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "see less" : "see more"}
    </Button>
  );

  return (
    <Box>
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
              {children}
            </ReactMarkdown>
          </Collapse>
        </Box>
      </Box>
      {isAlwaysOpen ? null : collapseButton}
    </Box>
  );
}

export default CollapsibleDescription;
