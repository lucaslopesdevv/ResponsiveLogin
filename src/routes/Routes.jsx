import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route,
} from "react-router-dom";

import { Login } from "../pages/Login/index";
import { Home } from "../pages/Home";
import "../global.css";

export function Routes() {
  return (
    <Router>
      <Rotas>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Rotas>
    </Router>
  );
}
