import { Grid, Button, Box } from "@mui/material";
import CvForm from "../components/CvForm";
import CvPrevisualzer from "../components/CvPrevisualzer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Grid container height="95vh" width="100%">
      <Grid item xs={6}>
        <Box>
          <Button variant="contained" onClick={handleBack}>
            Regresar
          </Button>
        </Box>
        <CvForm />
        <DownloadButton />
      </Grid>
      <Grid item xs={6}>
        {/* <CvPrevisualzer /> */}
      </Grid>
    </Grid>
  );
}

export default PageForm;
