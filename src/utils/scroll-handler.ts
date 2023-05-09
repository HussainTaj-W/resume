import { scroller } from "react-scroll";

export function scrollToName(name: string) {
  if (name) {
    scroller.scrollTo(name, {
      duration: 1000,
      smooth: true,
      offset: -50,
    });
  }
}
