import IImage from "./image";

export default interface IContactChannel {
  name: string;
  address: string;
  uri?: string | null;
  image: IImage;
}
