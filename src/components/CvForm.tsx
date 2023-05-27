import { Box, Button, Container } from "@mui/material";
import UserData from "./form/UserData";
import UserSumary from "./form/UserSumary";
import useCvContext from "../custom/useCvContext";
import UserEducation from "./form/UserEducation";
import UserTech from "./form/UserTech";
import UserActivities from "./form/UserActivities";

function CvForm() {
  const { index, setIndex } = useCvContext();

  return (
    <>
      <Box>
        <Container
          sx={{
            marginBlock: "24px",
            gap: "24px",
          }}
        >
          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            {index === 0 ? <UserData /> : null}
            {index === 1 ? <UserSumary /> : null}
            {index === 2 ? <UserEducation /> : null}
            {index === 3 ? <UserTech /> : null}
            {index === 4 ? <UserActivities /> : null}
            <Box mt={4}>
              {index === 0 ? null : (
                <Button variant="contained" onClick={() => setIndex(index - 1)}>
                  Anterior
                </Button>
              )}
              <Button variant="contained" onClick={() => setIndex(index + 1)}>
                Siguiente
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default CvForm;
