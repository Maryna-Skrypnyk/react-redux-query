import { useQuery } from "react-query";
import { fetchData } from "../api";

export const useFetchCats = () => {
  const url = "https://catfact.ninja/fact";
  const { data, error, isLoading } = useQuery(
    "fetchCats",
    () => fetchData(url),
    {
      cacheTime: 5000,
      placeholderData: { fact: "" },
    }
  );
  //   console.log(data);
  return { data: data?.data || {}, error, isLoading };
};
