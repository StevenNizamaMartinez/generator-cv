import * as React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField, Typography } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}

export default function CardChip({ title }: { title: string }) {
  const [tech, setTech] = React.useState<string>("");
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <>
      <Typography>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          name="tech"
          value={tech}
          onChange={(e) => setTech(e.currentTarget.value)}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ ml: 2, height: "40px" }}
          onClick={() => {
            setChipData((chips) => [
              ...chips,
              { key: chips.length, label: tech },
            ]);
            setTech("");
          }}
        >
          Agregar
        </Button>
      </Box>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
          );
        })}
      </Paper>
    </>
  );
}
