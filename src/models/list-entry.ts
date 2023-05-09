import IImage from "./image";
import IInstitution from "./institution";
import ISkill from "./skill";

export default interface IListEntry {
  from: string;
  to: string;
  institution: IInstitution;
  title: string;
  description: string;
  gallery: IImage[];
  skills: ISkill[];
}
