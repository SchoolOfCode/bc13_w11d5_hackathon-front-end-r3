import { useState, useContext } from "react";
import "./App.css";
import ListData from "../components/ListData/ListData";
import data1 from "..//data.json";
function App() {
  const [data, setdata] = useState(data1);

  return (
    <div className="App">
      <ListData data={data} />
    </div>
  );
}

export default App;
