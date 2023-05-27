import * as React from "react";
import { Box, Grid, Modal, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

interface ModalDeleteProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  textButton: string;
  handleDelete: () => void;
}

export default function ModalDelete({
  open,
  setOpen,
  textButton,
  handleDelete,
}: ModalDeleteProps) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseas Eliminar este item
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Esta acción no se puede deshacer
          </Typography>
          <Grid container spacing={2} m={2}>
            <Grid item xs={12}>
              <Button
                color="error"
                size="medium"
                variant="contained"
                onClick={handleDelete}
              >
                {textButton}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="error"
                size="medium"
                variant="outlined"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
