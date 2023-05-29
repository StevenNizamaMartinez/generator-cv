import { Box, Grid, Typography } from "@mui/material";
import { profiles } from "../data/profile";
import { useNavigate } from "react-router-dom";
import Laborum from "../assets/Laborum.png";

function CVSelector() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    navigate(`/color/${id}`);
  };

  return (
    <>
      <img src={Laborum} width="200px" />
      <Typography variant="h3" m={4} fontSize={24}>
        Selecciona la opción que más se adapte a tu perfil
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {profiles.map((profile) => (
          <Grid item xs={12} md={5} key={profile.id}>
            <Box
              id={profile.id}
              onClick={handleClick}
              sx={{
                height: "75px",
                bgcolor: "#DF321A",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#E34732",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                }}
              >
                {profile.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CVSelector;
