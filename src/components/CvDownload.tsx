import { Box, Button, Container, Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import useCvContext from "../custom/useCvContext";

function CvDownload({ document }: { document: JSX.Element }) {
  const { profile } = useCvContext();
  const name =
    profile?.name.length > 0
      ? `${profile.name.trim()} ${profile.lastname}`
      : "cv";
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Box mb={4}>
        <Typography
          variant="h6"
          mb={2}
          fontWeight="bold"
          fontSize={16}
          textAlign="center"
        >
          Felicitaciones tu Cv se ha generado de manera exitosa
        </Typography>
      </Box>
      <PDFDownloadLink document={document} fileName={`${name}.pdf`}>
        {({ loading }) =>
          loading ? (
            <Button variant="contained" disabled>
              Loading...
            </Button>
          ) : (
            <Button variant="contained">Descargar CV </Button>
          )
        }
      </PDFDownloadLink>
    </Container>
  );
}

export default CvDownload;
