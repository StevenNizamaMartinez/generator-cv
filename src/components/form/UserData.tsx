import { FormGroup, Grid, TextField } from "@mui/material";
import useCvContext from "../../custom/useCvContext";
import TitleForm from "../TitleForm";
import { MuiFileInput } from "mui-file-input";

function UserData() {
  const { profile, setProfile, file, setFile } = useCvContext();

  const handleChange = (newFile: File | null) => {
    console.log(newFile);
    setFile(newFile);
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
        <MuiFileInput
          size="small"
          variant="outlined"
          value={file}
          label="Foto de Perfil"
          onChange={handleChange}
        />
      </Grid>
    </FormGroup>
  );
}

export default UserData;
