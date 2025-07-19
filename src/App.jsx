import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Front from './pages/front';
import Client from './pages/Client';
import PointsClaim from './pages/PointsClaim';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/client" element={<Client />} />
        <Route path="claim-points" element={<PointsClaim />} />
        <Route path="/ranking" element={<Ranking />} />
        {/* Optional: Catch-all 404 route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
