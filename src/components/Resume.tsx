import { useState } from "react";

import { Box } from "@chakra-ui/react";

import "./Resume.css";
import { ActiveSectionNameContext } from "./ResumeContext";
import SidebarDrawer from "./SidebarDrawer";
import SidebarMenu from "./SidebarMenu";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Sections from "./sections/Sections";
import Skills from "./sections/Skills";

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
          <Sections>
            <Header />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </Sections>
        </Box>
      </Box>
      <Box m={1}>
        <Footer />
      </Box>
    </ActiveSectionNameContext.Provider>
  );
}

export default Resume;
