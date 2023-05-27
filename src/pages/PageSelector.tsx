import { Container } from "@mui/material";
import CVSelector from "../components/CVSelector";

function PageSelector() {
  return (
    <Container
      sx={{
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CVSelector />
    </Container>
  );
}

export default PageSelector;
