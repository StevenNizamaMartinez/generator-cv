import { Grid, TextField } from "@mui/material";
import useCvContext from "../../../custom/useCvContext";

function CardReferences({ index }: { index: number }) {
  const {
    profile: { references },
    setProfile,
  } = useCvContext();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          sx={{
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="Nombres y Apellidos"
          name="name"
          value={references[index].name}
          onChange={(e) => {
            setProfile((prev) => {
              const newReference = { ...prev };
              newReference.references[index].name = e.target.value;
              return newReference;
            });
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          sx={{
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="Numero de contacto"
          name="phone"
          value={references[index].phone}
          onChange={(e) => {
            setProfile((prev) => {
              const newReference = { ...prev };
              newReference.references[index].phone = e.target.value;
              return newReference;
            });
          }}
        />
      </Grid>
    </Grid>
  );
}
export default CardReferences;
