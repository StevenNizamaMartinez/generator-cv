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
import { degreeEducation, nivelEducacion } from "../../../data/education";
import { useState } from "react";
import useCvContext from "../../../custom/useCvContext";
import { IActivities } from "../../../types/context";

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

export default function CardActivities({ index }: { index: number }) {
  const {
    profile: { activities },
    setProfile,
    expanded,
    setExpanded,
  } = useCvContext();

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
      ...activities[index],
      [e.currentTarget.name]: formattedDate,
    };
    updateEducation(updatedEducation);
  };

  console.log(activities[index]);

  const updateEducation = (updatedEducation: IActivities) => {
    const updatedEducationList = [...activities];
    updatedEducationList[index] = updatedEducation;
    setProfile((prevProfile) => ({
      ...prevProfile,
      activities: updatedEducationList,
    }));
  };

  return (
    <Card sx={{ minWidth: "300px", width: "500px" }}>
      {expanded[index] ? (
        <CardHeader
          title={
            activities[index].companyName.length > 0
              ? activities[index].companyName
              : "Carrera"
          }
        />
      ) : (
        <CardHeader title={activities[index].companyName} />
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
          <TextField
            placeholder="Centro de Estudios"
            name="companyName"
            label="Oganizacion"
            value={activities[index].companyName}
            onChange={(e) => {
              const updatedEducation = {
                ...activities[index],
                companyName: e.target.value,
              };
              updateEducation(updatedEducation);
            }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
