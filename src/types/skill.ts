import IImage from "./image";

export default interface ISkill {
  id: string | number;
  name: string;
  image: IImage;
  score?: number | null;
  level?: string | null;
}
