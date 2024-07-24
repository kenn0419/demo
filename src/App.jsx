import "./index.css";

import { Route, Routes, useLocation } from "react-router-dom";
import {
  Agency,
  CardGame,
  Casino,
  ChickenGame,
  DownloadApp,
  Explode,
  Home,
  Instruct,
  Promotion,
  Public,
  ShootingFish,
  Sport,
} from "./pages";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMenu(false);
  }, [location]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Public showMenu={showMenu} setShowMenu={setShowMenu} />}
        >
          <Route path="" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/instruct" element={<Instruct />} />
          <Route path="/download-app" element={<DownloadApp />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/ban-ca" element={<ShootingFish />} />
          <Route path="/casino-online" element={<Casino />} />
          <Route path="/da-ga" element={<ChickenGame />} />
          <Route path="/game-bai" element={<CardGame />} />
          <Route path="/no-hu" element={<Explode />} />
          <Route path="/the-thao" element={<Sport />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
