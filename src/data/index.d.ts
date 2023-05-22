declare module "*/data/data.yml" {
  export interface AppData {
    app: IApp;
    skills: ISkill[];
  }

  const data: AppData;
  export default data;
}
