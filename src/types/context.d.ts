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

export interface IExperience {
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
}

export interface IProfile {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  adress: string;
  dni: string;
  education: IEducation[];
  activities: IActivities[];
}

export type IActivities = {
  area: string;
  companyName: string;
  description: string;
  endDate: any;
  hierarchy: string;
  idExperienceLaborum: string;
  imgUrl: string;
  jobPosition: string;
  location: string;
  startDate: any;
  workHere: boolean;
};

export type IEducation = {
  academicArea: string;
  career: string;
  condition: string;
  degree: string;
  description: string;
  endDate: any;
  idEducationLaborum: string;
  imgUrl: string;
  institutionName: string;
  startDate: any;
  studyingHere: boolean;
  level: string;
};
