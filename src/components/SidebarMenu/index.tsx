import { useCallback, useContext } from "react";

import { Box, Button } from "@chakra-ui/react";

import appData from "@/data/data.yml";
import IHeader from "@/types/header";
import ISection from "@/types/section";
import { scrollToName } from "@/utils/scroll-handler";

import { ActiveSectionNameContext } from "../ResumeContext";
import styles from "./styles.module.scss";

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

  let menuItems = (appData.app.sections.content as ISection[]).map((item) => ({
    name: item.id,
    displayName: item.title,
  }));
  menuItems = [
    { name: "header", displayName: (appData.app.header as IHeader).name },
    ...menuItems,
  ];

  return (
    <Box className={styles.menu} as="nav">
      {menuItems.map((item) => (
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
