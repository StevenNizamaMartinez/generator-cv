import { FormGroup, TextField } from "@mui/material";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";

function UserAchievements() {
  const {
    profile: { achievements },
    setProfile,
  } = useCvContext();

  return (
    <FormGroup>
      <TitleForm title="Logros Profesionales y Personales" />
      <TextField
        name="summary"
        multiline
        maxRows={4}
        placeholder="Escribe tus logros obtenidos en tu vida profesional y personal"
        style={{ fontSize: "12px", padding: "10px" }}
        value={achievements}
        onChange={(e) => {
          setProfile((prev) => {
            return {
              ...prev,
              achievements: e.target.value,
            };
          });
        }}
      />
    </FormGroup>
  );
}

export default UserAchievements;
