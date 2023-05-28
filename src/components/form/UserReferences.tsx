import { Box, Button } from "@mui/material";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ModalDelete from "../modal/ModalDelete";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";
import CardReferences from "./Card/CardReferences";

function UserReferences() {
  const { profile, setProfile } = useCvContext();
  const [open, setOpen] = useState(false);

  const handleDelete = (index: number) => {
    setProfile((prev) => {
      const newProfile = { ...prev };
      newProfile.references.splice(index, 1);
      return newProfile;
    });
    setOpen(false);
  };

  return (
    <>
      <TitleForm title="Referencias" />
      {profile.references.map((_, index) => (
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
          <CardReferences key={index} index={index} />
          <ModalDelete
            handleDelete={() => handleDelete(index)}
            open={open}
            setOpen={setOpen}
            textButton="Borrar Referencia"
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
              const newReference = { ...prev };
              newReference.references.push({
                name: "",
                phone: "",
              });
              return newReference;
            })
          }
        >
          Añadir Referencias
        </Button>
      </Box>
    </>
  );
}

export default UserReferences;
