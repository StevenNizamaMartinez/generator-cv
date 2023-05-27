import useCvContext from "../../custom/useCvContext";
import CardEducation from "./Card/CardEducation";
import { IEducation } from "../../types/context";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import TitleForm from "../TitleForm";

function UserEducation() {
  const { profile, setProfile } = useCvContext();

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newEducation: IEducation = {
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
    };
    setProfile({
      ...profile,
      education: [...profile.education, newEducation],
    });
    setExpanded((prevState: Record<number, boolean>) => {
      const newExpanded = { ...prevState };
      Object.keys(newExpanded).forEach((key: string) => {
        const numericKey = parseInt(key);
        newExpanded[numericKey] = false;
      });
      newExpanded[profile.education.length] = true;
      return newExpanded;
    });
  };

  return (
    <Grid container justifyContent="center" gap={4}>
      <TitleForm title="Educación" />
      {profile.education.map((_, index) => (
        <CardEducation
          key={index}
          index={index}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}

      <Button variant="outlined" onClick={handleClick}>
        Añadir Educación
      </Button>
    </Grid>
  );
}

export default UserEducation;
