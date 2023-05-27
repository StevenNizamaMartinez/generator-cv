import { useNavigate } from "react-router-dom";
import CvPrevisualzer from "../components/CvPrevisualzer";
import { Button, Container } from "@mui/material";
import useCvContext from "../custom/useCvContext";

function PageCv() {
  const { setIndex } = useCvContext();
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
