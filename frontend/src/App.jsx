import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    
    </>
    
  );
}

export default App;