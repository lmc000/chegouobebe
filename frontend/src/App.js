import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Blog from "@/pages/Blog";
import Artigo from "@/pages/Artigo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Artigo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
