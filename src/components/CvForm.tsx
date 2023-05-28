import { Box, Container } from "@mui/material";
import CvButtons from "./CvButtons";
import { useParams } from "react-router-dom";
import PathCvNoExperience from "./routes/PathCvNoExperience";
import PathCvExperience from "./routes/PathCvExperience";
import PathCvMiddle from "./routes/PathCvMiddle";
import PathCvSenior from "./routes/PathCvSenior";

function CvForm() {
  const { id } = useParams();

  return (
    <Container
      sx={{
        minWidth: "280px",
        width: "50%",
      }}
    >
      <Box component="form" onSubmit={(e) => e.preventDefault()}>
        {parseInt(id as string) === 1 ? (
          <>
            <PathCvNoExperience />
            <CvButtons maxIndex={6} />
          </>
        ) : null}
        {parseInt(id as string) === 2 ? (
          <>
            <PathCvExperience />
            <CvButtons maxIndex={7} />
          </>
        ) : null}
        {parseInt(id as string) === 3 ? (
          <>
            <PathCvMiddle />
            <CvButtons maxIndex={7} />
          </>
        ) : null}
        {parseInt(id as string) === 4 ? (
          <>
            <PathCvSenior />
            <CvButtons maxIndex={7} />
          </>
        ) : null}
      </Box>
    </Container>
  );
}

export default CvForm;
