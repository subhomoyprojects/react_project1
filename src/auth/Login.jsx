import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAuth } from "../redux/slice/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const { email, password } = data;
    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    dispatch(loginAuth(formData));
  };
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h3" style={{ marginBlock: "30px" }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
            error={!!errors.email}
            helperText={errors.email?.type === "required" ? "Email is Required" : errors.email?.type === "pattern" ? "Valid Email is Required" : ""}
          />
          <TextField margin="normal" fullWidth label="Password" {...register("password", { required: true })} error={!!errors.password} helperText={errors.password?.type === "required" ? "Password is Required" : ""} />
          <Button style={{ marginTop: "20px" }} fullWidth variant="contained" type="submit" color="success" size="large">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
