import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Edit from "./components/edit.js";
import Create from "./components/create.js";

function App() {
  return (
    <div className="App bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="text-4xl text-black font-bold text-center w-full pt-5">
        CRUD React
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
