import { FormGroup, TextField, Typography } from "@mui/material";
import useCvContext from "../../custom/useCvContext";

function UserData() {
  const { profile, setProfile } = useCvContext();

  return (
    <FormGroup>
      <Typography variant="h4" mb={4}>
        Datos Personales
      </Typography>
      <TextField
        label="Nombres"
        variant="outlined"
        name="name"
        value={profile?.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        name="lastname"
        placeholder="correo@gmail.com"
        onChange={(e) => setProfile({ ...profile, lastname: e.target.value })}
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={profile?.email}
        placeholder="correo@gmail.com"
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        value={profile?.phone}
        placeholder="987654321"
        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
      />
      <TextField
        label="Direción"
        variant="outlined"
        name="adress"
        value={profile?.adress}
        placeholder="Av. Los Olivos 123"
        onChange={(e) => setProfile({ ...profile, adress: e.target.value })}
      />
      <TextField
        label="DNI"
        variant="outlined"
        name="dni"
        value={profile?.dni}
        placeholder="12345678"
        onChange={(e) => setProfile({ ...profile, dni: e.target.value })}
      />
    </FormGroup>
  );
}

export default UserData;
