import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
import Title from './layout/Title';
import Menu from './layout/Menu';
import NoteDashboard from './notes/NoteDashboard';
import ErrorPage from './layout/ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Title />
        <Menu />
        <Routes>
          <Route path="/notes/*" element={<NoteDashboard />} />
          {/* <Route path="/character-records" element={<CharacterDashboard />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
