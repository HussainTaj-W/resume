import IFooter from "./footer";
import IHeader from "./header";
import ISection from "./section";

export default interface IApp {
  header: IHeader;
  footer: IFooter;
  sections: ISection[];
}
