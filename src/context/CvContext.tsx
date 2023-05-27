import React, { createContext, useState } from "react";
import {
  CvContextProps,
  IEducation,
  IExperience,
  IProfile,
} from "../types/context";

export const CvContext = createContext<CvContextProps>({} as CvContextProps);

export const CvProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
  });

  const [profile, setProfile] = useState<IProfile>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    adress: "",
    dni: "",
    seminars: [
      {
        name: "",
        place: "",
      },
    ],
    education: [
      {
        academicArea: "",
        career: "",
        condition: "incompleto",
        degree: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        idEducationLaborum: "",
        imgUrl: "",
        institutionName: "",
        studyingHere: false,
        level: "",
      },
    ],
    activities: [
      {
        area: "",
        companyName: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        hierarchy: "",
        idExperienceLaborum: "",
        imgUrl: "",
        jobPosition: "",
        location: "",
        workHere: false,
      },
    ],
    knowledge: [
      {
        knowledgeName: "",
        level: "",
      },
    ],
    experience: [
      {
        area: "",
        companyName: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        hierarchy: "",
        idExperienceLaborum: "",
        imgUrl: "",
        jobPosition: "",
        location: "",
        workHere: false,
      },
    ],
    achievements: "",
  });
  const [experience, setExperience] = useState<IExperience>({
    area: "",
    companyName: "",
    description: "",
    endDate: new Date(),
    hierarchy: "",
    idExperienceLaborum: "",
    imgUrl: "",
    jobPosition: "",
    location: "",
    startDate: new Date(),
    workHere: false,
  });
  const [summary, setSummary] = useState<string>(
    "Como estudiante del #### ciclo de la carrera de xxxxxxxxx, estoy interesado en desarrollarme en el área de #########. Me especializo en procesos de xxxxx, tttttttt y ccccccc, y genero valor a la empresa en tareas como la Tarea 1 y Tarea 2. He adquirido sólidos conocimientos en herramientas como xxxxxxxxx, yyyyyyyyyy y zzzzzzzz. Además, poseo un dominio avanzado del idioma xxxx."
  );
  const [education, setEducation] = useState<IEducation>({
    academicArea: "",
    career: "",
    condition: "",
    degree: "",
    description: "",
    endDate: new Date(),
    idEducationLaborum: "",
    imgUrl: "",
    institutionName: "",
    startDate: new Date(),
    studyingHere: false,
    level: "",
  });

  return (
    <CvContext.Provider
      value={{
        experience,
        setExperience,
        summary,
        setSummary,
        profile,
        setProfile,
        index,
        setIndex,
        education,
        setEducation,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </CvContext.Provider>
  );
};
