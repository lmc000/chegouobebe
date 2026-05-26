import { ArrowRight, Star, Heart } from "lucide-react";

export const Hero = () => {
    return (
        <section
            id="inicio"
            data-testid="hero-section"
            className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FFE9D6] rounded-full blur-3xl opacity-60 -z-0" />
            <div className="absolute top-40 -right-20 w-96 h-96 bg-[#FFC4A3] rounded-full blur-3xl opacity-40 -z-0" />

            {/* Floating paw prints */}
            <div className="absolute top-32 right-10 text-[#FFC4A3] text-3xl animate-float-paw select-none">🐾</div>
            <div className="absolute top-1/2 left-8 text-[#FFC4A3] text-2xl animate-float-paw-alt select-none hidden md:block">🐾</div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                {/* Left column */}
                <div className="flex flex-col gap-7 fade-up">
                    <div
                        data-testid="hero-badge"
                        className="inline-flex items-center gap-2 bg-white border border-[#F2E3D8] rounded-full px-4 py-2 self-start shadow-sm"
                    >
                        <span className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#F9A826] text-[#F9A826]" />
                            ))}
                        </span>
                        <span className="text-sm font-semibold text-[#5C463A]">
                            Recomendado por +12.000 donos de gatos
                        </span>
                    </div>

                    <h1
                        data-testid="hero-title"
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#5C463A] leading-[1.05]"
                    >
                        O melhor para o seu{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">amigo</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFC4A3] -z-0 rounded-full"></span>
                        </span>{" "}
                        de quatro patas. 🐱
                    </h1>

                    <p
                        data-testid="hero-subtitle"
                        className="text-lg md:text-xl text-[#8C776D] leading-relaxed max-w-xl"
                    >
                        Análises honestas, guias práticos e os produtos mais bem
                        avaliados para gatos em Portugal. Tudo testado, tudo
                        explicado — para o seu felino viver feliz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <a
                            href="#categorias"
                            data-testid="hero-cta-button"
                            className="group bg-[#FF9F87] hover:bg-[#FF8A6E] text-white rounded-full px-8 py-4 font-bold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                        >
                            Explorar Categorias
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#produtos"
                            data-testid="hero-secondary-cta"
                            className="bg-[#FFE9D6] hover:bg-[#F2DCC9] text-[#5C463A] rounded-full px-8 py-4 font-bold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <Heart className="w-5 h-5 fill-[#FF9F87] text-[#FF9F87]" />
                            Top Produtos
                        </a>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-6 text-sm text-[#8C776D] font-semibold">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#85C296]"></span>
                            Análises imparciais
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#85C296]"></span>
                            Preços em €
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#85C296]"></span>
                            Envio para Portugal
                        </span>
                    </div>
                </div>

                {/* Right column - image */}
                <div className="relative fade-up">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFE9D6] to-[#FFC4A3] rounded-[48px] rotate-3"></div>
                        <img
                            data-testid="hero-image"
                            src="https://images.pexels.com/photos/30001432/pexels-photo-30001432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Gato laranja fofo deitado no tapete"
                            className="relative rounded-[40px] w-full h-[420px] md:h-[520px] object-cover shadow-[0_20px_60px_rgb(92,70,58,0.15)]"
                            loading="eager"
                        />

                        {/* Floating card 1 */}
                        <div
                            data-testid="hero-floating-card-1"
                            className="absolute -left-4 md:-left-8 top-12 bg-white rounded-3xl p-4 shadow-[0_12px_40px_rgb(92,70,58,0.12)] border border-[#F2E3D8] flex items-center gap-3 max-w-[200px]"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#FFE9D6] flex items-center justify-center text-2xl">
                                🐟
                            </div>
                            <div>
                                <div className="text-xs text-[#8C776D] font-semibold">Mais vendido</div>
                                <div className="text-sm font-bold text-[#5C463A]">Fonte de Água</div>
                            </div>
                        </div>

                        {/* Floating card 2 */}
                        <div
                            data-testid="hero-floating-card-2"
                            className="absolute -right-4 md:-right-6 bottom-12 bg-white rounded-3xl p-4 shadow-[0_12px_40px_rgb(92,70,58,0.12)] border border-[#F2E3D8]"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#F9A826] text-[#F9A826]" />
                                ))}
                            </div>
                            <div className="text-xs text-[#8C776D] font-semibold">4.9/5 — 2.348 reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
