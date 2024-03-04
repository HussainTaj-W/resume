import IImage from "./image";

export default interface IHeader {
  name: string;
  title: string;
  years: string;
  tagline: string;
  image: IImage;
  rive: {
    src: string,
    stateMachines: string,
  }
}
