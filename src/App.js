import "./App.css";
import GovList from "./pages/GovList";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import GovDetail from "./pages/GovDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <div className="products-heading">
          <Link to="/Governement">
            <h1>Tunisia Governements</h1>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="Governement" element={<Home />}>
          <Route index element={<GovList />} />
          <Route path=":govId" element={<GovDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
