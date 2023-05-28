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
  TextField,
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

export default function CardVolunteers({
  index,
  expanded,
  setExpanded,
}: ICard) {
  const {
    profile: { volunteer },
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
    const updatedExperienceList = [...volunteer];
    updatedExperienceList[index] = updatedExperience;
    setProfile((prevProfile) => ({
      ...prevProfile,
      volunteer: updatedExperienceList,
    }));
  };
  const handleDelete = () => {
    const updatedExperienceList = [...volunteer];
    updatedExperienceList.splice(index, 1);
    setProfile((prevProfile) => ({
      ...prevProfile,
      volunteer: updatedExperienceList,
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
            textButton="Eliminar Voluntariado"
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
                  {volunteer[index].jobPosition}
                  <br />
                  {volunteer[index].companyName}
                </Typography>
              ) : (
                <Typography variant="h6" fontSize="16px" fontWeight="bold">
                  Experiencias en Voluntariados
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
                  value={volunteer[index].jobPosition}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
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
                      ...volunteer[index],
                      companyName: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />
                <Select
                  required
                  size="small"
                  value={volunteer[index].hierarchy}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
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
                  value={volunteer[index].area}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
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
                  label="Funciones"
                  name="funtions"
                  value={volunteer[index].funtions}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
                      funtions: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />

                <TextField
                  size="small"
                  label="Objetivo"
                  name="description"
                  value={volunteer[index].description}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
                      description: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />

                <TextField
                  size="small"
                  label="Logros"
                  name="achievements"
                  value={volunteer[index].achievements}
                  onChange={(e) => {
                    const updatedExperience = {
                      ...volunteer[index],
                      achievements: e.target.value,
                    };
                    updateExperience(updatedExperience);
                  }}
                />

                <Grid container gap="20px" sx={{ width: "100%" }}>
                  <Grid item>
                    <DatePicker
                      label={"Fecha de Inicio"}
                      views={["month", "year"]}
                      format="MM/YYYY"
                      value={dayjs(volunteer[index].endDate)}
                      onChange={(date: Dayjs | null) => {
                        const updatedExperience = {
                          ...volunteer[index],
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
                      disabled={volunteer[index].workHere ? true : false}
                      value={dayjs(volunteer[index].endDate)}
                      onChange={(date: Dayjs | null) => {
                        const updatedExperience = {
                          ...volunteer[index],
                          endDate: new Date(dayjs(date).format()),
                        };
                        updateExperience(updatedExperience);
                      }}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  label="Soy voluntario aquí"
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
