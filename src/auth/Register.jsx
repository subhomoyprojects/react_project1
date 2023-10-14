import { Button, Container, Grid, TextField } from "@mui/material";

export default function Register() {
  return (
    <Container maxWidth="sm">
      <h1>Register</h1>
      <form>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <TextField label="Password" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <Button type="submit" variant="contained" color="success" fullWidth size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
