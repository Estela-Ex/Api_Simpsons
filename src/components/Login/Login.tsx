import { SchemaLogin } from "./SchemaLogin";
import { initialValues } from "../Login/formLogin";
import { FormikHelpers, FormikProps, useFormik } from "formik";
import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import { Link} from "react-router-dom";
import { UserAuth } from "../../interface/UserAuth";
import { useAuthContext } from "../../context/AuthContext";


export default function Login() {
  const { setUser } = useAuthContext();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting }: FormikProps<UserAuth> = useFormik<UserAuth>({
    initialValues,
    validationSchema: SchemaLogin,
    onSubmit: login,
  });
  function login(values: UserAuth | null, actions: FormikHelpers<UserAuth> | any) {
    if (values?.email === "prueba@gmail.com" && values?.password === "Uu12345") {
      setUser(values);
      actions.resetForm();
     
      
    } else {
      alert("Los datos introducidos no son correctos");
    }
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "35rem" }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Inicia Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 4,
            border: "1px solid grey",
            borderRadius: 2,
          }}
        >
          <TextField
            id="email"
            label="Introduce tu Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2 }}
            error={Boolean(errors.email && touched.email)}
            helperText={errors.email}
          />
          <TextField
            id="password"
            label="Introduce tu contraseña"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2 }}
            error={Boolean(errors.password && touched.password)}
            helperText={errors.password}
          />
          <span>
            Recordar contraseña <Checkbox defaultChecked />
          </span>
          <Button disabled={isSubmitting} type="submit" variant="contained" sx={{ mb: 2 }}>
            Login
          </Button>
        </Box>
      </form>
      <Link to={"/Registre"}>¿Aun sin cuenta?Registrate</Link>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
    </Box>
  );
}
