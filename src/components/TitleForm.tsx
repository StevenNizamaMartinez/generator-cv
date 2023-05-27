import { Typography } from "@mui/material";

function TitleForm({ title }: { title: string }) {
  return (
    <Typography variant="h6" mb={2} fontWeight="bold" fontSize={16}>
      {title}
    </Typography>
  );
}

export default TitleForm;
