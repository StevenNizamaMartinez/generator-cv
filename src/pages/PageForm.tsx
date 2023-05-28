import { Button, Container } from "@mui/material";
import CvForm from "../components/CvForm";
import { useNavigate } from "react-router-dom";
import useCvContext from "../custom/useCvContext";

function PageForm() {
  const { setIndex } = useCvContext();
  const navigate = useNavigate();

  const handleBack = () => {
    setIndex(0);
    navigate("/");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "24px",
        width: "100%",
      }}
    >
      <Button
        sx={{
          alignSelf: "flex-start",
        }}
        variant="outlined"
        onClick={handleBack}
      >
        Regresar
      </Button>
      <CvForm />
    </Container>
  );
}

export default PageForm;
