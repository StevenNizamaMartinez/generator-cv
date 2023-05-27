import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  FormGroup,
  Grid,
  Input,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { degreeEducation, nivelEducacion } from "../../../data/education";
import { useState } from "react";
import useCvContext from "../../../custom/useCvContext";
import { ICard, IEducation } from "../../../types/context";
import ModalDelete from "../../modal/ModalDelete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { deleteExpand } from "../../../utils/deleteExpand";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand === true ? "rotate(180deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Componente

export default function CardEducation({ index, expanded, setExpanded }: ICard) {
  const {
    profile: { education },
    setProfile,
  } = useCvContext();

  const [level, setLevel] = useState(education[index].level);
  const [degree, setDegree] = useState(education[index].degree);
  const isMobile = useMediaQuery("(max-width:750px)");

  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const updateEducation = (updatedEducation: IEducation) => {
    const updatedEducationList = [...education];
    updatedEducationList[index] = updatedEducation;
    setProfile((prevProfile) => ({
      ...prevProfile,
      education: updatedEducationList,
    }));
  };

  const handleDelete = () => {
    const updatedEducationList = [...education];
    updatedEducationList.splice(index, 1);
    setProfile((prevProfile) => ({
      ...prevProfile,
      education: updatedEducationList,
    }));
    setExpanded(deleteExpand(expanded, index));
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <DeleteIcon sx={{ color: "red" }} onClick={() => setOpen(true)} />
          <ModalDelete
            open={open}
            setOpen={setOpen}
            handleDelete={handleDelete}
            textButton="Eliminar Educación"
          />
          <CardHeader
            sx={{
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={
              !expanded[index] ? (
                <Typography variant="h6" fontSize="16px" fontWeight="bold">
                  {education[index].career}
                  <br />
                  {education[index].institutionName}
                </Typography>
              ) : (
                <Typography variant="h6" fontSize="16px" fontWeight="bold">
                  Educación
                </Typography>
              )
            }
            action={
              <ExpandMore
                expand={expanded[index]}
                onClick={handleExpandClick}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            }
          />
        </Box>
        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
          <CardContent>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Input
                size="small"
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
              <Select
                labelId="level"
                size="small"
                id="level"
                value={level}
                placeholder="Nivel de Educación"
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
              {education[index].level === "universitario" ? (
                <Select
                  size="small"
                  labelId="degree"
                  placeholder="Grado Universitario"
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

              <TextField
                placeholder="Carrera"
                size="small"
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
                orientation={isMobile ? "vertical" : "horizontal"}
                size="small"
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

              <Grid container gap="20px" sx={{ width: "100%" }}>
                <Grid>
                  <DatePicker
                    label={"Fecha de Inicio"}
                    views={["month", "year"]}
                    format="MM/YYYY"
                    value={dayjs(education[index].startDate)}
                    onChange={(date: Dayjs | null) => {
                      const updatedEducation = {
                        ...education[index],
                        startDate: new Date(dayjs(date).format()),
                      };
                      updateEducation(updatedEducation);
                      console.log(dayjs(date).format());
                    }}
                  />
                </Grid>
                <Grid>
                  <DatePicker
                    label={"Fecha de Finalización"}
                    views={["month", "year"]}
                    format="MM/YYYY"
                    value={dayjs(education[index].endDate)}
                    disabled={
                      education[index].condition === "cursando" ? true : false
                    }
                    onChange={(date: Dayjs | null) => {
                      const updatedEducation = {
                        ...education[index],
                        endDate: new Date(dayjs(date).format()),
                      };
                      updateEducation(updatedEducation);
                    }}
                  />
                </Grid>
              </Grid>
            </FormGroup>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
