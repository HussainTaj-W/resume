import { Box } from "@chakra-ui/react";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

function TimelineEntry({ children }: Props) {
  return <Box className={`${styles.entry} timeline-entry`}>{children}</Box>;
}

export default TimelineEntry;
