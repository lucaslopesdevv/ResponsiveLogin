import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route,
} from "react-router-dom";

import { Login } from "../pages/Login/index";

export function Routes() {
  return (
    <Router>
      <Rotas>
        <Route path="/Login" element={<Login />} />
      </Rotas>
    </Router>
  );
}
