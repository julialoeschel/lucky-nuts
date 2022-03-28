import QuoteNut from "./pages/QuotesNut";
import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/quotes" element={<QuoteNut />} />
    </Routes>
  );
}

export default App;
