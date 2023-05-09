import { useCallback, useContext } from "react";

import { Box, Button } from "@chakra-ui/react";

import headerData from "@/data/header.json";
import { scrollToName } from "@/utils/scroll-handler";

import { ActiveSectionNameContext } from "../ResumeContext";
import styles from "./styles.module.scss";

const MENU_ITEMS = [
  {
    displayName: headerData.name,
    name: "header",
  },
  {
    displayName: "Experience",
    name: "experience",
  },
  {
    displayName: "Education",
    name: "education",
  },
  {
    displayName: "Skills",
    name: "skills",
  },
  {
    displayName: "Contact",
    name: "contact",
  },
];

interface Props {
  onSelectedItem?: (name: string) => void;
}

function SidebarMenu({ onSelectedItem }: Props) {
  const { activeSectionName, setActiveSectionName } = useContext(
    ActiveSectionNameContext
  );

  const onButtonClick = useCallback(
    (event: React.MouseEvent) => {
      const name = (event.target as HTMLButtonElement).dataset.name;
      if (name) {
        setActiveSectionName(name);
        scrollToName(name);
        onSelectedItem?.call({}, name);
      }
    },
    [onSelectedItem, setActiveSectionName]
  );

  return (
    <Box className={styles.menu}>
      {MENU_ITEMS.map((item) => (
        <Box m={1} key={item.name}>
          <Button
            variant="ghost"
            data-name={item.name}
            onClick={onButtonClick}
            isActive={activeSectionName === item.name}
          >
            {item.displayName}
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default SidebarMenu;
