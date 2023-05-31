import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Piket from "./piket/Piket";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/piket" element={<Piket />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
