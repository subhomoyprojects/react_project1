import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h3" style={{ marginBlock: "30px" }}>
          Login
        </Typography>
        <form>
          <TextField margin="normal" fullWidth label="Email" />
          <TextField margin="normal" fullWidth label="Password" />
          <Button style={{ marginTop: "20px" }} fullWidth variant="contained" type="submit" color="success" size="large">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
