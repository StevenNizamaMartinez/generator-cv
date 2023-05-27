import { Button, Grid } from "@mui/material";
import useCvContext from "../custom/useCvContext";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function CvButtons({ maxIndex }: { maxIndex: number }) {
  const { index, setIndex, setExpanded } = useCvContext();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Grid container gap="20px" sx={{ width: "100%" }} mt={4}>
      {index === 0 ? null : (
        <Button
          variant="contained"
          onClick={() => {
            setIndex(index - 1);
            setExpanded({ 0: true });
          }}
        >
          Anterior
        </Button>
      )}
      {index === maxIndex ? (
        <Button
          color="success"
          variant="contained"
          onClick={() => {
            toast.success("Cv generado con éxito");
            setTimeout(() => {
              navigate(`/cv/${id}`);
              toast.dismiss();
            }, 500);
          }}
        >
          Finalizar
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            if (index === maxIndex) return;
            setIndex(index + 1);
            setExpanded({ 0: true });
          }}
        >
          Siguiente
        </Button>
      )}
    </Grid>
  );
}

export default CvButtons;
