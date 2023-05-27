import { TextareaAutosize } from "@mui/base";
import { FormGroup, Typography } from "@mui/material";
import useCvContext from "../../custom/useCvContext";

function UserSumary() {
  const { setSummary, summary } = useCvContext();

  return (
    <FormGroup>
      <Typography variant="h4" mb={4}>
        Resumen Profesional
      </Typography>
      <TextareaAutosize
        name="summary"
        maxRows={4}
        style={{ fontSize: "20px", padding: "10px" }}
        placeholder="Escribe una descripción de tu perfil profesional"
        value={summary}
        onChange={(e) => {
          setSummary(e.target.value);
        }}
      />
    </FormGroup>
  );
}

export default UserSumary;
