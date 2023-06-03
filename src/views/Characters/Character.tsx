import { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Cards from "./Cards";
import { useSearchContext } from "../../context/SearchContext";
import { Button, Grid } from "@mui/material";

export default function Characters() {
  const { resultFetch, functionFetch, paginar, page } = useSearchContext();

  useEffect(() => {
    functionFetch();
  }, [page]);

  return (
    <>
      <Layout />
      <Grid container spacing={3} sx={{ p: "2rem" }}>
        {resultFetch?.map((item: any) => {
          return (
            <Grid item sm={12} md={6} >
              <Cards character={item} key={item.id} />
            </Grid>
          );
        })}
      </Grid>
      <div className="page-button-container">
        <Button
          className="miboton"
          onClick={() => {
            if (page > 1) paginar(-1);
          }}
        >
          Previus
        </Button>
        <h3>Página {page} de 127</h3>
        <Button
          className="miboton"
          onClick={() => {
            if (page < 127) paginar(1);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
}
