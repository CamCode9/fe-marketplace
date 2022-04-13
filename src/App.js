import { Routes, Route } from "react-router-dom";
import "./App.css";
import Items from "./components/AllItems";
import ItemByCat from "./components/ItemByCat";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <header className="App-header">Test</header>
      <Nav />
      <Routes>
        <Route path="/api/items" element={<Items />} />
        <Route path="/api/items/:category_name" element={<ItemByCat />} />
      </Routes>
    </div>
  );
}

export default App;
