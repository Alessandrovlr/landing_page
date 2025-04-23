import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Projeto } from "./pages/Projeto";
import { Sobre } from "./pages/Sobre";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Contato } from "./pages/contato";

function App() {
  return (
    <div className="w-[100dvw] h-[100dvh] bg-[rgb(43,43,43)]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/*" element={<h1>404 Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
