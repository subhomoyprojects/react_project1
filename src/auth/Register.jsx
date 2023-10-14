import { useForm } from "react-hook-form";
import { Button, Container, Grid, TextField } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerAuth } from "../redux/slice/AuthSlice";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const { first_name, last_name, email, password, profile_pic } = data;
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile_pic", profile_pic[0]);
      const response = dispatch(registerAuth(formData));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>FormDataPass</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={900} spacing={2}>
          <Grid item sm={6}>
            <TextField
              label="First Name"
              fullWidth
              {...register("first_name", { required: true, minLength: 3 })}
              error={!!errors.first_name}
              helperText={errors.first_name?.type === "required" ? "First name is required" : errors.first_name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Last Name" fullWidth {...register("last_name", { required: true })} error={!!errors.last_name} helperText={errors.last_name && "Last name is required"} />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Valid email is required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Password"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </Grid>
          <Grid item sm={12}>
            <Button size="large" fullWidth component="label" variant="outlined" startIcon={<CloudUpload />}>
              Upload file
              <VisuallyHiddenInput type="file" {...register("profile_pic", { required: true })} error={!!errors.profile_pic} />
            </Button>
          </Grid>
          <Grid item sm={12}>
            <Button type="submit" variant="contained" color="secondary" fullWidth size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
