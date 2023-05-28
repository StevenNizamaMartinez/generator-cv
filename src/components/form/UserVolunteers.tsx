import useCvContext from "../../custom/useCvContext";
import { IVolunteer } from "../../types/context";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import TitleForm from "../TitleForm";
import CardVolunteers from "./Card/CardVolunteers";

function UserVolunteers() {
  const { profile, setProfile } = useCvContext();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
  });
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newVolunteer: IVolunteer = {
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
      achievements: "",
      funtions: "",
    };
    setProfile({
      ...profile,
      volunteer: [...profile.volunteer, newVolunteer],
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
      <TitleForm title="Voluntariados" />
      {profile.volunteer.map((_, index) => (
        <CardVolunteers
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
          Añadir Voluntariado
        </Button>
      </Box>
    </>
  );
}

export default UserVolunteers;
