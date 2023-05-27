import { Box, Button } from "@mui/material";
import CardKnowledge from "./Card/CardKnowledge";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ModalDelete from "../modal/ModalDelete";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";

export default function UserKnowledge() {
  const { profile, setProfile } = useCvContext();
  const [open, setOpen] = useState(false);

  const handleDelete = (index: number) => {
    setProfile((prev) => {
      const newProfile = { ...prev };
      newProfile.knowledge.splice(index, 1);
      return newProfile;
    });
    setOpen(false);
  };

  return (
    <>
      <TitleForm title="Conocimientos y Tecnologías" />
      {profile.knowledge.map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            marginTop: "18px",
          }}
        >
          <RemoveCircleIcon
            sx={{
              color: "red",
            }}
            onClick={() => setOpen(true)}
          />
          <CardKnowledge key={index} index={index} />
          <ModalDelete
            handleDelete={() => handleDelete(index)}
            open={open}
            setOpen={setOpen}
            textButton="Borrar Concocimiento"
          />
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "18px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() =>
            setProfile((prev) => {
              const newProfile = { ...prev };
              newProfile.knowledge.push({
                knowledgeName: "",
                level: "",
              });
              return newProfile;
            })
          }
        >
          Añadir Conocimientos
        </Button>
      </Box>
    </>
  );
}
