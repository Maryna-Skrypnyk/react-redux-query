import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./redux/slices";
import { useFetchCats } from "./hooks";

import "./App.css";

function App() {
  const catsData = useSelector((state) => state.catReducer.catsData);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchCats("https://catfact.ninja/fact");

  console.log(data.fact);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div className="App">
      <p>Data about cats with using Redux</p>
      <span>{catsData}</span>
      <p>Data about cats with using React Query</p>
      <span>{data.fact}</span>
    </div>
  );
}

export default App;
