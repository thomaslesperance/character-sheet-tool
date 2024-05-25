import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import Title from "./layout/Title";
import Menu from "./layout/Menu";
import NoteDashboard from "./notes/NoteDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Title />
        <Menu />
        <Routes>
          <Route path="/notes" element={<NoteDashboard />} />
          {/* <Route path="/character-records" element={<CharacterDashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
