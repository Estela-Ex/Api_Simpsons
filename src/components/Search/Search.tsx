import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSearchContext } from "../../context/SearchContext";
import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce"

export default function Search() {
  const { functionSearch} = useSearchContext();
  const [personaje, setPersonaje] = useState("")

  const debouncedSearch = useDebounce(personaje, 400)

  function handleInput(e:any) {
  setPersonaje(e.target.value)
}

  useEffect(() => {
    functionSearch(debouncedSearch)
  }, [debouncedSearch])
  

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "100ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleInput} value={personaje} id="outlined-basic" label="Busca tu personaje favorito" variant="outlined" />
    </Box>
  );
}
