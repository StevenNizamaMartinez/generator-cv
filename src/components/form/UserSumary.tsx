import { FormGroup, Grid, TextField } from "@mui/material";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";

function UserSumary() {
  const { setSummary, summary } = useCvContext();

  return (
    <FormGroup>
      <TitleForm title="Resumen Profesional" />
      <Grid container>
        <TextField
          fullWidth
          name="summary"
          multiline
          maxRows={12}
          label="Resumen Profesional"
          style={{ fontSize: "12px", padding: "10px" }}
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </Grid>
    </FormGroup>
  );
}

export default UserSumary;
