import { Button, Container } from "@mui/material";
import CvForm from "../components/CvForm";
import CvPrevisualzer from "../components/CvPrevisualzer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import useCvContext from "../custom/useCvContext";

const DownloadButton = () => (
  <PDFDownloadLink document={<CvPrevisualzer />} fileName="somename.pdf">
    {({ loading }) =>
      loading ? (
        "Loading document..."
      ) : (
        <Button variant="outlined">Descarga tu CV!</Button>
      )
    }
  </PDFDownloadLink>
);

function PageForm() {
  const { index, setIndex } = useCvContext();
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
      {/* <DownloadButton /> */}
    </Container>
  );
}

export default PageForm;
