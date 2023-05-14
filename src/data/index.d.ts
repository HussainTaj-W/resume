declare module "*/data/contact.yml" {
  export interface ContactData {
    messageMe: {
      id: string;
      response: string;
    };
    channels: IContactChannel[];
  }

  const data: ContactData;
  export default data;
}

declare module "*/data/app.yml" {
  export interface AppData {
    title: string;
    faviconUrl: string;
  }

  const data: AppData;
  export default data;
}

declare module "*/data/education.yml" {
  export interface EducationData {
    entries: IListEntry[];
  }

  const data: EducationData;
  export default data;
}

declare module "*/data/experience.yml" {
  export interface ExperienceData {
    entries: IListEntry[];
  }

  const data: ExperienceData;
  export default data;
}

declare module "*/data/skills.yml" {
  export interface ISkillEntry {
    category: string;
    skills: ISkill[];
  }

  const data: ISkillEntry[];
  export default data;
}

declare module "*/data/header.yml" {
  export interface HeaderData {
    name: string;
    title: string;
    years: string;
    tagline: string;
    image: IImage;
  }

  const data: HeaderData;
  export default data;
}

declare module "*/data/footer.yml" {
  export interface IAttribution {
    what: string;
    whom: {
      name: string;
      url: string;
    };
  }

  export interface FooterData {
    attributions: IAttribution[];
  }

  const data: FooterData;
  export default data;
}
