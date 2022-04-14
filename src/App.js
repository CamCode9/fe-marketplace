import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Items from "./components/AllItems";
import ItemByCat from "./components/ItemByCat";
import Nav from "./components/Nav";
import ProfileForm from "./components/ProfileForm";

function App() {
  const [inputs, setInputs] = useState({});

  return (
    <div className="App">
      <header className="App-header">Test</header>

      <Nav />
      <Routes>
        {/* <Route path="/api/users" element={<PostUser />} /> */}
        <Route path="/api/items" element={<Items />} />
        <Route path="/api/items/:category_name" element={<ItemByCat />} />
        <Route
          path="/api/users"
          element={<ProfileForm inputs={inputs} setInputs={setInputs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
