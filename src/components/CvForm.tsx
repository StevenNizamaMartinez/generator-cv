import { Box, Button, Container, Grid } from "@mui/material";
import UserData from "./form/UserData";
import UserSumary from "./form/UserSumary";
import useCvContext from "../custom/useCvContext";
import UserEducation from "./form/UserEducation";
import UserKnowledge from "./form/UserKnowledge";
import UserExperience from "./form/UserExperience";
import UserSeminars from "./form/UserSeminars";
import UserAchievements from "./form/UserAchievements";
import CvButtons from "./CvButtons";

function CvForm() {
  const { index } = useCvContext();

  return (
    <Container
      sx={{
        minWidth: "280px",
        width: "50%",
      }}
    >
      <Box component="form" onSubmit={(e) => e.preventDefault()}>
        <>
          {index === 0 ? <UserData /> : null}
          {index === 1 ? <UserSumary /> : null}
          {index === 2 ? <UserEducation /> : null}
          {index === 3 ? <UserKnowledge /> : null}
          {index === 4 ? <UserExperience /> : null}
          {index === 5 ? <UserSeminars /> : null}
          {index === 6 ? <UserAchievements /> : null}
        </>
        <CvButtons maxIndex={6} />
      </Box>
    </Container>
  );
}

export default CvForm;
