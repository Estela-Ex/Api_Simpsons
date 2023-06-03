import { useContext, useState, createContext, ReactNode } from "react";
import { ResultFetch } from "../interface/ResultFetch";

const SearchContext = createContext<any>({
  resultFetch: null,
  functionFetch: () => {},
  functionSearch: () => {},
  page: 1,
  paginar: () => {},
});

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [resultFetch, setResultFetch] = useState<ResultFetch[]>([]);
  const [page, setPage] = useState<number>(1);

  async function functionFetch() {
    const response = await fetch(`https://apisimpsons.fly.dev/api/personajes?=limit=1&page=${page}`);
    const data = await response.json();
    setResultFetch(data.docs);
  }

  async function functionSearch(personaje: string) {
    const response = await fetch(`https://apisimpsons.fly.dev/api/personajes/find/${personaje}`);
    const data = await response.json();
    setResultFetch(data.result);
  }

  function paginar(pagina: number) {
    setPage(page + pagina);
  }

  const value: any = {
    resultFetch,
    functionFetch,
    functionSearch,
    page,
    paginar,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
export function useSearchContext() {
  return useContext(SearchContext);
}
