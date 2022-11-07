import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
