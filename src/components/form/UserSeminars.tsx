import { useState } from "react";
import CardSeminars from "./Card/CardSeminars";
import useCvContext from "../../custom/useCvContext";
import { Box, Button } from "@mui/material";
import { ISeminars } from "../../types/context";
import TitleForm from "../TitleForm";

function UserSeminars() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
  });
  const { profile, setProfile } = useCvContext();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newSeminar: ISeminars = {
      name: "",
      place: "",
    };
    setProfile({
      ...profile,
      seminars: [...profile.seminars, newSeminar],
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
      <TitleForm title="Seminarios o Conferencias" />

      {profile.seminars.map((_, index) => (
        <CardSeminars
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
          Añadir Seminario
        </Button>
      </Box>
    </>
  );
}

export default UserSeminars;
