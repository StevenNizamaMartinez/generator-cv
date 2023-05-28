import React, { createContext, useState } from "react";
import { CvContextProps, IProfile } from "../types/context";

export const CvContext = createContext<CvContextProps>({} as CvContextProps);

export const CvProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [file, setFile] = useState<File | null>(null);
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
    volunteer: [
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
        achievements: "",
        funtions: "",
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
        achievements: "",
        funtions: "",
      },
    ],
    achievements: "",
    references: [
      {
        name: "",
        phone: "",
      },
    ],
  });

  const [summary, setSummary] = useState<string>(
    "Como estudiante del #### ciclo de la carrera de xxxxxxxxx, estoy interesado en desarrollarme en el área de #########. Me especializo en procesos de xxxxx, tttttttt y ccccccc, y genero valor a la empresa en tareas como la Tarea 1 y Tarea 2. He adquirido sólidos conocimientos en herramientas como xxxxxxxxx, yyyyyyyyyy y zzzzzzzz. Además, poseo un dominio avanzado del idioma xxxx."
  );

  return (
    <CvContext.Provider
      value={{
        file,
        setFile,
        summary,
        setSummary,
        profile,
        setProfile,
        index,
        setIndex,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </CvContext.Provider>
  );
};
