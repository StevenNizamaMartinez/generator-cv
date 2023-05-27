export interface CvContextProps {
  experience: IExperience;
  setExperience: React.Dispatch<React.SetStateAction<IExperience>>;
  summary: string;
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  profile: IProfile;
  setProfile: React.Dispatch<React.SetStateAction<IProfile>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  education: IEducation;
  setEducation: React.Dispatch<React.SetStateAction<IEducation>>;
  expanded: Record<number, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<any>>;
}

export type IProfile = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  adress: string;
  dni: string;
  education: IEducation[];
  knowledge: IKnowledge[];
  activities: IActivities[];
  experience: IExperience[];
  seminars: ISeminars[];
  achievements: string;
};

type ICard = {
  index: number;
  expanded: Record<number, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
};

export type ISeminars = {
  name: string;
  place: string;
};

export type IExperience = {
  area: string;
  companyName: string;
  description: string;
  endDate: Date;
  hierarchy: string;
  idExperienceLaborum: string;
  imgUrl: string;
  jobPosition: string;
  location: string;
  startDate: Date;
  workHere: boolean;
};

export type IKnowledge = {
  knowledgeName: string;
  level: string;
};

export type IActivities = {
  area: string;
  companyName: string;
  description: string;
  endDate: Date;
  hierarchy: string;
  idExperienceLaborum: string;
  imgUrl: string;
  jobPosition: string;
  location: string;
  startDate: Date;
  workHere: boolean;
};

export type IEducation = {
  academicArea: string;
  career: string;
  condition: string;
  degree: string;
  description: string;
  endDate: Date;
  idEducationLaborum: string;
  imgUrl: string;
  institutionName: string;
  startDate: Date;
  studyingHere: boolean;
  level: string;
};

export type IExperience = {
  area: string;
  companyName: string;
  description: string;
  endDate: Date;
  hierarchy: string;
  idExperienceLaborum: string;
  imgUrl: string;
  jobPosition: string;
  location: string;
  startDate: Date;
  workHere: bolean;
};
