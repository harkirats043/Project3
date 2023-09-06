import './App.css';

// Import components
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/HomePage"


// Import Pages
import FoxPictures from './pages/FoxPictures';
import DogsDetails from './pages/DogsDetails';
console.log(FoxPictures)

function App() {
  return (
    <div className="App" >
      <Homepage />
      <Routes>
        <Route path="/FoxPictures" element={<FoxPictures/>} />
        <Route path="/DogsDetails" element={<DogsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
