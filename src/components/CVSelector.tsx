import { Box, Grid, Typography } from "@mui/material";
import { profiles } from "../data/profile";
import { useNavigate } from "react-router-dom";

function CVSelector() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    navigate(`/form/${id}`);
  };

  return (
    <>
      <Typography variant="h3" m={4} fontSize={24}>
        Selecciona tu opción que más se adecue
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {profiles.map((profile) => (
          <Grid item xs={12} md={5} key={profile.id}>
            <Box
              id={profile.id}
              onClick={handleClick}
              sx={{
                height: "75px",
                bgcolor: "primary.main",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "primary.dark",
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
