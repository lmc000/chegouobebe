import { useState, useEffect } from "react";
import { Cat, Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { label: "Início", href: "#inicio" },
    { label: "Categorias", href: "#categorias" },
    { label: "Top Produtos", href: "#produtos" },
    { label: "Blog", href: "#blog" },
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
                scrolled
                    ? "bg-[#FFFDF9]/85 backdrop-blur-xl border-b border-[#F2E3D8] shadow-[0_4px_20px_rgb(92,70,58,0.04)]"
                    : "bg-transparent"
            }`}
        >
            <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
                <a
                    href="#inicio"
                    data-testid="logo-link"
                    className="flex items-center gap-2 group"
                >
                    <span className="w-10 h-10 rounded-full bg-[#FF9F87] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Cat className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-extrabold text-xl md:text-2xl text-[#5C463A] tracking-tight">
                        Coisas para Gatos
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-[#5C463A] font-semibold hover:text-[#FF9F87] transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9F87] rounded-full transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <a
                        href="#produtos"
                        data-testid="nav-cta-button"
                        className="bg-[#FF9F87] hover:bg-[#FF8A6E] text-white rounded-full px-6 py-3 font-bold transition-all duration-300 shadow-sm hover:shadow-md inline-block"
                    >
                        Ver Ofertas 🐾
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    data-testid="mobile-menu-toggle"
                    className="lg:hidden w-10 h-10 rounded-full bg-[#FFE9D6] flex items-center justify-center text-[#5C463A]"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden bg-[#FFFDF9] border-t border-[#F2E3D8] px-6 py-6 flex flex-col gap-4 shadow-lg"
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-[#5C463A] font-semibold py-2"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#produtos"
                        onClick={() => setOpen(false)}
                        className="bg-[#FF9F87] text-white rounded-full px-6 py-3 font-bold text-center mt-2"
                    >
                        Ver Ofertas 🐾
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
