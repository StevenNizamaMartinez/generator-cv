import useCvContext from "../../custom/useCvContext";
import { IExperience } from "../../types/context";
import { Box, Button } from "@mui/material";
import CardExperience from "./Card/CardExperience";
import { useState } from "react";
import TitleForm from "../TitleForm";

function UserExperience() {
  const { profile, setProfile } = useCvContext();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
  });
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newExperience: IExperience = {
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
    };
    setProfile({
      ...profile,
      experience: [...profile.experience, newExperience],
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
    <>
      <TitleForm title="Experiencia" />
      {profile.experience.map((_, index) => (
        <CardExperience
          key={index}
          index={index}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "18px",
        }}
      >
        <Button variant="outlined" onClick={handleClick}>
          Añadir Experiencia
        </Button>
      </Box>
    </>
  );
}

export default UserExperience;
