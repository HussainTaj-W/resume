import { useState } from "react";

import { Box } from "@chakra-ui/react";

import data from "@/data/data.yml";
import FactoryComponent from "@/utils/factory";

import "./Resume.css";
import { ActiveSectionNameContext } from "./ResumeContext";
import SidebarDrawer from "./SidebarDrawer";
import SidebarMenu from "./SidebarMenu";

function Resume() {
  const [activeSectionName, setActiveSectionName] = useState("header");

  return (
    <ActiveSectionNameContext.Provider
      value={{ activeSectionName, setActiveSectionName }}
    >
      <Box id="container" mb={20}>
        <Box
          position="fixed"
          zIndex={2}
          m={2}
          display={{
            base: "block",
            lg: "none",
          }}
        >
          <SidebarDrawer />
        </Box>
        <Box
          id="sidebar"
          w={{
            base: "15%",
          }}
          p={{
            base: 1,
            lg: 2,
            xl: 4,
          }}
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <SidebarMenu />
        </Box>
        <Box
          w={{
            base: "100%",
            lg: "85%",
          }}
        >
          <FactoryComponent name="header" props={data.app.header} />
          <FactoryComponent name="sections" props={data.app.sections} />
        </Box>
      </Box>
      <Box m={1}>
        <FactoryComponent name="footer" props={data.app.footer} />
      </Box>
    </ActiveSectionNameContext.Provider>
  );
}

export default Resume;
