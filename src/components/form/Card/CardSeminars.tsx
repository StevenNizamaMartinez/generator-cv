import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  FormGroup,
  Grid,
  IconButton,
  IconButtonProps,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import ModalDelete from "../../modal/ModalDelete";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useCvContext from "../../../custom/useCvContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ICard, ISeminars } from "../../../types/context";
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

function CardSeminars({ index, expanded, setExpanded }: ICard) {
  const {
    profile: { seminars },
    setProfile,
  } = useCvContext();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("Eliminado");
    const updatedSeminarsList = seminars;
    updatedSeminarsList.splice(index, 1);
    setProfile((prev) => {
      return {
        ...prev,
        seminars: updatedSeminarsList,
      };
    });
    setExpanded(deleteExpand(expanded, index));
    setOpen(false);
  };

  const updateSeminars = (updatedSeminars: ISeminars) => {
    const updatedSeminarsList = seminars;
    updatedSeminarsList[index] = updatedSeminars;
    setProfile((prev) => {
      return {
        ...prev,
        seminars: updatedSeminarsList,
      };
    });
  };

  const handleExpandClick = () => {
    setExpanded((prevState: { [key: number]: boolean }) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
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
                "Hola"
              </Typography>
            ) : (
              <Typography variant="h6" fontSize="16px" fontWeight="bold">
                Seminarios o Conferencias asistidas
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
              <Grid container>
                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    sx={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                    label="Nombre del seminario"
                    name="name"
                    value={seminars[index].name}
                    onChange={(e) => {
                      const updateSeminar = {
                        ...seminars[index],
                        name: e.target.value,
                      };
                      updateSeminars(updateSeminar);
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
                    label="Lugar / Institución"
                    name="place"
                    value={seminars[index].place}
                    onChange={(e) => {
                      const updateSeminar = {
                        ...seminars[index],
                        place: e.target.value,
                      };
                      updateSeminars(updateSeminar);
                    }}
                  />
                </Grid>
              </Grid>
            </FormGroup>
          </Collapse>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardSeminars;
