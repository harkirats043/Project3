import './App.css';

// Import components
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/HomePage"


// Import Pages
import FoxPictures from './pages/FoxPictures';
console.log(FoxPictures)

function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/" element={<FoxPictures/>} />
      </Routes>
    </div>
  );
}

export default App;
