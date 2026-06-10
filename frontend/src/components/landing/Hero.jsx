import { ArrowRight, Star, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 pb-16 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #E6F7F3 0%, #D1F0EA 50%, #F0FAF8 100%)" }}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "#2A9D8F" }} />
                <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#52B788" }} />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#B2E5DA] text-[#2A9D8F] text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
                            🍼 Guias honestos para pais brasileiros
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#1A3C38] mb-10" style={{ lineHeight: "1.3" }}>
                            O melhor para o seu{" "}
                            <span style={{ color: "#2A9D8F" }}>
                                bebê feliz.
                            </span>{" "}🍀
                        </h1>
                        <p className="text-[#3A6B64] text-lg leading-relaxed mb-8 max-w-lg">
                            Análises honestas, guias práticos e os produtos mais bem avaliados para bebês no Brasil. Tudo testado, tudo explicado — para o seu bebê crescer feliz e seguro.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#categorias" className="inline-flex items-center gap-2 text-white rounded-full px-7 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #2A9D8F, #1A8075)" }}>
                                Explorar Categorias <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#produtos" className="inline-flex items-center gap-2 bg-white border border-[#B2E5DA] text-[#1A3C38] rounded-full px-7 py-4 font-bold transition-all hover:border-[#2A9D8F] hover:shadow-md">
                                ❤️ Top Produtos
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#B2E5DA]">
                            <div className="flex items-center gap-2">
                                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F9A826] text-[#F9A826]" />)}</div>
                                <span className="text-[#3A6B64] text-sm font-medium">Recomendado por +8.000 pais</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#3A6B64] text-sm font-medium">
                                <Shield className="w-4 h-4 text-[#2A9D8F]" /> Análises imparciais
                            </div>
                            <div className="flex items-center gap-2 text-[#3A6B64] text-sm font-medium">
                                <BookOpen className="w-4 h-4 text-[#2A9D8F]" /> Preços em R$
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 scale-95" style={{ background: "#2A9D8F" }} />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ aspectRatio: "4/3" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80"
                                    alt="Bebê feliz"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[#D1F0EA]">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#D1F0EA" }}>
                                    🍼
                                </div>
                                <div>
                                    <p className="text-xs text-[#3A6B64] font-medium">Mais vendido</p>
                                    <p className="text-sm font-bold text-[#1A3C38]">Bugaboo Fox 5</p>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#D1F0EA]">
                                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F9A826] text-[#F9A826]" />)}</div>
                                <p className="text-xs font-bold text-[#1A3C38]">4.9/5 — 1.847 avaliações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
