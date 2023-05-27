import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageForm from "./pages/PageForm";
import PageSelector from "./pages/PageSelector";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageSelector />} />
        <Route path="/form/:id" element={<PageForm />} />
      </Routes>
    </>
  );
}

export default App;
