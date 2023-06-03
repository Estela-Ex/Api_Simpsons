import { useAuthContext } from "../../context/AuthContext";
import { Box, Grid } from "@mui/material";
import Login from "../../components/Login/Login";
import Layout from "../../components/Layout/Layout";


export default function Home() {
  const {user} = useAuthContext()
  return (
    <>
      {user?.email&&<Layout/>}
      <Box sx={{ display: "flex", m: "2rem" }}>
        <img src="1506004325_686220_1506008048_album_normal.jpg" />
        <Grid container sx={{ margin: "0", width: "100%", display: " flex", justifyContent: "center", alignContent: "center" }}>
          {!user?.email&&<Login />}
        </Grid>
      </Box>
    </>
  );
}
