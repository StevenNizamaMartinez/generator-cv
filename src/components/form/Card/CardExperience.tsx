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
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  MenuItem,
  Select,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import useCvContext from "../../../custom/useCvContext";
import { ICard, IExperience } from "../../../types/context";
import ModalDelete from "../../modal/ModalDelete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { areas, hierarchies } from "../../../data/experience";
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

export default function CardExperience({
  index,
  expanded,
  setExpanded,
}: ICard) {
  const {
    profile: { experience },
    setProfile,
  } = useCvContext();

  const [checked, setChecked] = useState(false);

  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const updateExperience = (updatedExperience: IExperience) => {
    const updatedExperienceList = [...experience];
    updatedExperienceList[index] = updatedExperience;
    setProfile((prevProfile) => ({
      ...prevProfile,
      experience: updatedExperienceList,
    }));
  };
  const handleDelete = () => {
    const updatedExperienceList = [...experience];
    updatedExperienceList.splice(index, 1);
    setProfile((prevProfile) => ({
      ...prevProfile,
      experience: updatedExperienceList,
    }));
    setExpanded(deleteExpand(expanded, index));
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setProfile((prevProfile) => ({
      ...prevProfile,
      experience: [
        ...prevProfile.experience.slice(0, index),
        {
          ...prevProfile.experience[index],
          workHere: event.target.checked,
        },
        ...prevProfile.experience.slice(index + 1),
      ],
    }));
  };

  return (
    <>
      <Card sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
                  {experience[index].jobPosition}
                  <br />
                  {experience[index].companyName}
                </Typography>
              ) : (
                <Typography variant="h6" fontSize="16px" fontWeight="bold">
                  Experiencias Laborales o Prácticas
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
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <Input
                  required
                  placeholder="Nombre del Puesto"
                  size="small"
                  name="jobPosition"
                  value={experience[index].jobPosition}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...experience[index],
                      jobPosition: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />
                <TextField
                  required
                  size="small"
                  label="Empresa"
                  name="companyName"
                  onChange={(e) => {
                    const updatedExperience = {
                      ...experience[index],
                      companyName: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />
                <Select
                  required
                  size="small"
                  value={experience[index].hierarchy}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...experience[index],
                      hierarchy: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                >
                  {hierarchies.map((hierarchy) => (
                    <MenuItem value={hierarchy.value} key={hierarchy.value}>
                      {hierarchy.label}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  required
                  size="small"
                  value={experience[index].area}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...experience[index],
                      area: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                >
                  {areas.map((area) => (
                    <MenuItem value={area.value} key={area.value}>
                      {area.label}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  size="small"
                  label="Descripción"
                  name="description"
                  onChange={(e) => {
                    setProfile((prevProfile) => ({
                      ...prevProfile,
                      experience: [
                        ...prevProfile.experience.slice(0, index),
                        {
                          ...prevProfile.experience[index],
                          description: e.target.value,
                        },
                        ...prevProfile.experience.slice(index + 1),
                      ],
                    }));
                  }}
                />
                <Grid container gap="20px" sx={{ width: "100%" }}>
                  <Grid item>
                    <DatePicker
                      label={"Fecha de Inicio"}
                      views={["month", "year"]}
                      format="MM/YYYY"
                      value={dayjs(experience[index].endDate)}
                      onChange={(date: Dayjs | null) => {
                        const updatedExperience = {
                          ...experience[index],
                          startDate: new Date(dayjs(date).format()),
                        };
                        updateExperience(updatedExperience);
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <DatePicker
                      label={"Fecha de Finalización"}
                      views={["month", "year"]}
                      format="MM/YYYY"
                      disabled={experience[index].workHere ? true : false}
                      value={dayjs(experience[index].endDate)}
                      onChange={(date: Dayjs | null) => {
                        const updatedExperience = {
                          ...experience[index],
                          endDate: new Date(dayjs(date).format()),
                        };
                        updateExperience(updatedExperience);
                      }}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  label="Trabajo aqui actualmente"
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                />
              </FormGroup>
            </Collapse>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
