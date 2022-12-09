
import './App.css';
import ListData from "../components/ListData/ListData"
import data from "..//data.json"
function App() {
  
  return (
    <div className="App">
    <ListData data={data}/>
      
    </div>
  );
}

export default App;
