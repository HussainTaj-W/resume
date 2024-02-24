import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import SidebarMenu from "../SidebarMenu";
import styles from "./styles.module.scss";

function SidebarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as React.RefObject<HTMLButtonElement>;
  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Open Navbar"
        onClick={onOpen}
        rounded="100%"
        icon={<HamburgerIcon />}
        className={styles["drawer-button"]}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarMenu onSelectedItem={() => onClose()} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SidebarDrawer;
