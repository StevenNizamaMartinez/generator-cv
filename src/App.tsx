import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageForm from "./pages/PageForm";
import PageSelector from "./pages/PageSelector";
import PageCv from "./pages/PageCv";
import PageColor from "./pages/PageColor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageSelector />} />
        <Route path="/color/:id" element={<PageColor />} />
        <Route path="/form/:id" element={<PageForm />} />
        <Route path="/cv/:id" element={<PageCv />} />
      </Routes>
    </>
  );
}

export default App;
