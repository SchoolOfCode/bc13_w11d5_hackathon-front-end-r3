import { useState, createContext, useEffect } from "react";
import "./App.css";
import ListData from "../components/ListData/ListData";
const URL = process.env.REACT_APP_URL;
// import data1 from "..//data.json";
export const dataContext = createContext();
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getInitialData() {
      let response = await fetch(`${URL}/api/Dinosaurs`);
      let data = await response.json();
      setData(data);
    }
    getInitialData();
  }, []);
  console.log(data);

  return (
    <div className="App">
      <div className="title">
        <h1>DinoMania</h1>
      </div>

      <dataContext.Provider value={data}>
        <ListData data={data} />
      </dataContext.Provider>
    </div>
  );
}

export default App;
