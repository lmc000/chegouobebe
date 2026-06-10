import { useState, useEffect } from "react";
import { Baby, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
    { label: "Início", href: "/" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Top Produtos", href: "/#produtos" },
    { label: "Blog", href: "/blog" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-[#F0FAF8]/90 backdrop-blur-xl border-b border-[#B2E5DA] shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="w-10 h-10 rounded-full bg-[#2A9D8F] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Baby className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-extrabold text-xl md:text-2xl text-[#1A3C38] tracking-tight">
                        Chegou o Bebê
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) =>
                        item.href.startsWith("/#") ? (
                            <a key={item.label} href={item.href} className="text-[#1A3C38] font-semibold hover:text-[#2A9D8F] transition-colors relative group">
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2A9D8F] rounded-full transition-all group-hover:w-full" />
                            </a>
                        ) : (
                            <Link key={item.label} to={item.href} className="text-[#1A3C38] font-semibold hover:text-[#2A9D8F] transition-colors relative group">
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2A9D8F] rounded-full transition-all group-hover:w-full" />
                            </Link>
                        )
                    )}
                </nav>

                <div className="hidden lg:block">
                    <Link to="/blog" className="bg-[#2A9D8F] hover:bg-[#1A8075] text-white rounded-full px-6 py-3 font-bold transition-all duration-300 shadow-sm hover:shadow-md inline-block">
                        Ver Guias 🍼
                    </Link>
                </div>

                <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-[#D1F0EA] flex items-center justify-center text-[#1A3C38]">
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-[#F0FAF8] border-t border-[#B2E5DA] px-6 py-6 flex flex-col gap-4 shadow-lg">
                    {NAV_ITEMS.map((item) =>
                        item.href.startsWith("/#") ? (
                            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-[#1A3C38] font-semibold py-2">{item.label}</a>
                        ) : (
                            <Link key={item.label} to={item.href} onClick={() => setOpen(false)} className="text-[#1A3C38] font-semibold py-2">{item.label}</Link>
                        )
                    )}
                    <Link to="/blog" onClick={() => setOpen(false)} className="bg-[#2A9D8F] text-white rounded-full px-6 py-3 font-bold text-center mt-2">Ver Guias 🍼</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
