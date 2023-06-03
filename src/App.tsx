import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles";
import AuthContextProvider from "./context/AuthContext";
import Home from "../src/views/Home/Home";
import Characters from "./views/Characters/Character";
import SearchContextProvider from '../src/context/SearchContext'
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <SearchContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/">
            <Route index element={<Home />} />
            <Route path="characters" element={<Characters />} /> 
            </Route>
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
        </SearchContextProvider>
    </AuthContextProvider>
  );
}

export default App;
