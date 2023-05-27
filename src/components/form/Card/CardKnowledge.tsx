import { useState } from "react";
import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";
import useCvContext from "../../../custom/useCvContext";

function CardKnowledge({ index }: { index: number }) {
  const { profile, setProfile } = useCvContext();
  const [knowledge, setKnowledge] = useState(profile.knowledge[index]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          sx={{
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="Conocimiento"
          name="knowledgeName"
          value={knowledge.knowledgeName}
          onChange={(e) => {
            setKnowledge((prev) => {
              const newKnowledge = { ...prev };
              newKnowledge.knowledgeName = e.target.value;
              return newKnowledge;
            });
            setProfile((prev) => {
              const newProfile = { ...prev };
              newProfile.knowledge[index].knowledgeName = e.target.value;
              return newProfile;
            });
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <Select
            labelId="select-label"
            value={knowledge.level}
            onChange={(e) => {
              setKnowledge((prev) => {
                const newKnowledge = { ...prev };
                newKnowledge.level = e.target.value as string;
                return newKnowledge;
              });
              setProfile((prev) => {
                const newProfile = { ...prev };
                newProfile.knowledge[index].level = e.target.value;
                return newProfile;
              });
              console.log(knowledge);
            }}
            defaultValue="basico"
            sx={{
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <MenuItem value="basico">Básico</MenuItem>
            <MenuItem value="intermedio">Intermedio</MenuItem>
            <MenuItem value="avanzado">Avanzado</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default CardKnowledge;
