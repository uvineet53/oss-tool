import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Results from "./components/Results/Results";
import PreviousResults from "./components/PreviousResults/PreviousResults";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/results" element={<Results />} />
          <Route exact path="/previous-results" element={<PreviousResults />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;