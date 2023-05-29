import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import useCvContext from "../custom/useCvContext";
import { useNavigate } from "react-router-dom";

const COLORS = [
  { name: "Rojo", value: "#F44336" },
  { name: "Verde", value: "#4CAF50" },
  { name: "Azul", value: "#2196F3" },
  { name: "Amarillo", value: "#BCA97E" },
  { name: "Morado", value: "#9C27B0" },
];

function PageColor() {
  const { color, setColor } = useCvContext();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(() => {
      localStorage.setItem("color", newColor);
      return newColor;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }} mb={4}>
        Elige un color para tu CV
      </Typography>
      <RadioGroup>
        {COLORS.map((color) => (
          <FormControlLabel
            key={color.name}
            value={color.value}
            control={
              <Radio
                onChange={handleChange}
                sx={{
                  color: color.value,
                  "&.Mui-checked": {
                    color: color.value,
                    opacity: 0.9,
                  },
                }}
              />
            }
            label={color.name}
          />
        ))}
      </RadioGroup>
      <Grid container justifyContent="center" gap="12px" mt="20px">
        <Button
          sx={{
            backgroundColor: color,
            "&:hover": {
              backgroundColor: color,
              opacity: 0.8,
            },
          }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Anterior
        </Button>
        <Button
          sx={{
            backgroundColor: color,
            "&:hover": {
              backgroundColor: color,
              opacity: 0.8,
            },
          }}
          variant="contained"
          onClick={() => navigate("/form/1")}
        >
          Siguente
        </Button>
      </Grid>
    </Box>
  );
}

export default PageColor;
