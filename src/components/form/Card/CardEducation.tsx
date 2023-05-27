import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { degreeEducation, nivelEducacion } from "../../../utils/education";
import { useState } from "react";
import useCvContext from "../../../custom/useCvContext";
import { IEducation } from "../../../types/context";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Componente

export default function CardEducation({ index }: { index: number }) {
  const {
    profile: { education },
    setProfile,
    expanded,
    setExpanded,
  } = useCvContext();

  const [level, setLevel] = useState(education[index].level);
  const [degree, setDegree] = useState(education[index].degree);

  const handleExpandClick = () => {
    setExpanded((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [index]: !prevState[index], // Cambia el estado expandido de la tarjeta
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.currentTarget.value);

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const updatedEducation = {
      ...education[index],
      [e.currentTarget.name]: formattedDate,
    };
    updateEducation(updatedEducation);
  };

  console.log(education[index]);

  const updateEducation = (updatedEducation: IEducation) => {
    const updatedEducationList = [...education];
    updatedEducationList[index] = updatedEducation;
    setProfile((prevProfile) => ({
      ...prevProfile,
      education: updatedEducationList,
    }));
  };

  return (
    <Card sx={{ minWidth: "300px", width: "500px" }}>
      {expanded[index] ? (
        <CardHeader
          title={
            education[index].career.length > 0
              ? education[index].career
              : "Carrera"
          }
        />
      ) : (
        <CardHeader title={education[index].career} />
      )}
      <ExpandMore
        expand={expanded[index]}
        onClick={handleExpandClick}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
        <CardContent>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <FormControl>
              <Select
                labelId="level"
                id="level"
                value={level}
                label="Nivel Academico"
                onChange={(e) => {
                  const updatedEducation = {
                    ...education[index],
                    level: e.target.value,
                  };
                  setLevel(e.target.value);
                  updateEducation(updatedEducation);
                }}
              >
                {nivelEducacion.map((nivel) => (
                  <MenuItem key={nivel.value} value={nivel.value}>
                    {nivel.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              placeholder="Centro de Estudios"
              name="institutionName"
              value={education[index].institutionName}
              onChange={(e) => {
                const updatedEducation = {
                  ...education[index],
                  institutionName: e.target.value,
                };
                updateEducation(updatedEducation);
              }}
            />
            <TextField
              placeholder="Carrera"
              name="career"
              value={education[index].career}
              onChange={(e) => {
                const updatedEducation = {
                  ...education[index],
                  career: e.target.value,
                };
                updateEducation(updatedEducation);
              }}
            />
            <ToggleButtonGroup
              color="secondary"
              exclusive
              onChange={(_, value) => {
                const updatedEducation = {
                  ...education[index],
                  condition: value,
                };
                updateEducation(updatedEducation);
              }}
              value={
                education[index].condition
                  ? education[index].condition
                  : "completo"
              }
            >
              <ToggleButton value="completo">Completo</ToggleButton>
              <ToggleButton value="incompleto">Incompleto</ToggleButton>
              <ToggleButton value="cursando">Cursando</ToggleButton>
            </ToggleButtonGroup>
            {education[index].condition === "completo" ? (
              <Select
                labelId="degree"
                id="degree"
                value={degree}
                onChange={(e) => {
                  const updatedEducation = {
                    ...education[index],
                    degree: e.target.value,
                  };
                  setDegree(e.target.value);
                  updateEducation(updatedEducation);
                }}
              >
                {degreeEducation.map((degree) => (
                  <MenuItem key={degree.value} value={degree.value}>
                    {degree.label}
                  </MenuItem>
                ))}
              </Select>
            ) : null}
            <Box display="flex" gap="12px" alignItems="center">
              <TextField
                name="startDate"
                type="date"
                onChange={handleChange}
                value={education[index].startDate}
                label="Fecha de Inicio"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography variant="h6">-</Typography>
              <TextField
                name="endDate"
                type="date"
                disabled={education[index].condition === "cursando"}
                value={education[index].endDate}
                onChange={handleChange}
                label="Fecha de Fin"
                InputLabelProps={{
                  shrink: true,
                  placeholder: "Fecha de Fin",
                }}
              />
            </Box>
          </FormGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
}
