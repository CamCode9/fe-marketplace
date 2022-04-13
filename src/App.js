import { Routes, Route } from "react-router-dom";
import "./App.css";
import Items from "./components/AllItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">Test</header>
      <Routes>
        <Route path="/api/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
