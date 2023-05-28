import { FormGroup, Grid, Input, TextField } from "@mui/material";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";
import React from "react";

function UserData() {
  const { profile, setProfile, setFile } = useCvContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.currentTarget.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <FormGroup>
      <TitleForm title="Datos Personales" />
      <Grid container gap={2} width="100%">
        <TextField
          label="Nombres"
          variant="outlined"
          size="small"
          name="name"
          value={profile?.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <TextField
          label="Apellidos"
          variant="outlined"
          size="small"
          name="lastname"
          placeholder="correo@gmail.com"
          onChange={(e) => setProfile({ ...profile, lastname: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          name="email"
          value={profile?.email}
          placeholder="correo@gmail.com"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <TextField
          label="Phone"
          variant="outlined"
          size="small"
          name="phone"
          value={profile?.phone}
          placeholder="987654321"
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        />
        <TextField
          label="Direción"
          variant="outlined"
          size="small"
          name="adress"
          value={profile?.adress}
          placeholder="Av. Los Olivos 123"
          onChange={(e) => setProfile({ ...profile, adress: e.target.value })}
        />
        <TextField
          label="DNI"
          variant="outlined"
          size="small"
          name="dni"
          value={profile?.dni}
          placeholder="12345678"
          onChange={(e) => setProfile({ ...profile, dni: e.target.value })}
        />

        <Input
          type="file"
          inputProps={{ accept: "image/*" }}
          name="file"
          onChange={handleFileChange}
        />
      </Grid>
    </FormGroup>
  );
}

export default UserData;
