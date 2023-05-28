import { useNavigate } from "react-router-dom";
import CvPrevisualzer from "../components/CvPrevisualzer";
import { Button, Container } from "@mui/material";

function PageCv() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          alignSelf: "flex-start",
          marginBottom: "12px",
          bgcolor: "#DF321A",
        }}
        variant="contained"
        onClick={handleBack}
      >
        Regresar
      </Button>
      <CvPrevisualzer />
    </Container>
  );
}

export default PageCv;
