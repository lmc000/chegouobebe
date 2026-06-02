import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Landing from "@/pages/Landing";
import Blog from "@/pages/Blog";
import Artigo from "@/pages/Artigo";
import Privacidade from "@/pages/Privacidade";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Artigo />} />
                    <Route path="/privacidade" element={<Privacidade />} />
                </Routes>
            </BrowserRouter>
            <Analytics />
        </div>
    );
}

export default App;
