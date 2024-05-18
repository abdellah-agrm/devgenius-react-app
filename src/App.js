import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import RandomIdea from "./components/RandomIdea";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/random-idea/:difficulty" element={<RandomIdea/>}/>
    </Routes>
  );
}

export default App;
