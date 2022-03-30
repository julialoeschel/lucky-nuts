import QuoteNut from "./pages/QuotesNut";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/quotes" element={<QuoteNut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/all" element={<AllQuotes />} />
    </Routes>
  );
}

export default App;
