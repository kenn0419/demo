import "./index.css";

import { Route, Routes } from "react-router-dom";
import { DownloadApp, Home, Instruct, Promotion, Public } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/instruct" element={<Instruct />} />
          <Route path="/download-app" element={<DownloadApp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
