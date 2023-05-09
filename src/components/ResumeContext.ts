import { createContext } from "react";

export const ActiveSectionNameContext = createContext({
  activeSectionName: "header",
  setActiveSectionName: (name: string) => {},
});
