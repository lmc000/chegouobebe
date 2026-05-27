import { ExternalLink, ShoppingBag } from "lucide-react";

export const Newsletter = () => {
    return (
        <section
            data-testid="newsletter-section"
            className="px-6 md:px-12 lg:px-24 py-12 md:py-20"
        >
            <div className="max-w-5xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#FF9F87] to-[#FF8A6E] rounded-[40px] p-8 md:p-16 text-center text-white overflow-hidden shadow-[0_20px_60px_rgb(255,159,135,0.4)]">

                    {/* Decorative paws */}
                    <div className="absolute top-6 left-8 text-white/20 text-4xl rotate-[-15deg] select-none">🐾</div>
                    <div className="absolute top-16 right-12 text-white/15 text-5xl rotate-[20deg] select-none">🐾</div>
                    <div className="absolute bottom-8 left-16 text-white/15 text-3xl rotate-[10deg] select-none">🐾</div>
                    <div className="absolute bottom-12 right-8 text-white/20 text-4xl rotate-[-20deg] select-none">🐾</div>

                    <div className="relative">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                            <ShoppingBag className="w-8 h-8 text-white" strokeWidth={2.25} />
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
                            Encontra tudo para o teu gato 🐱
                        </h2>

                        <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8">
                            Fontes, camas, rações, brinquedos e muito mais.
                            Os melhores produtos com entrega rápida em Portugal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://www.amazon.es/s?k=produtos+para+gatos&tag=coisasparagat-21"
                                target="_blank"
                                rel="noopener sponsored"
                                className="bg-white text-[#FF8A6E] hover:bg-[#FFE9D6] rounded-full px-8 py-4 font-bold transition-all duration-300 shadow-sm inline-flex items-center justify-center gap-2 text-lg"
                            >
                                🛒 Ver produtos na Amazon
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.amazon.es/s?k=racao+gatos&tag=coisasparagat-21"
                                target="_blank"
                                rel="noopener sponsored"
                                className="bg-white/20 hover:bg-white/30 border-2 border-white text-white rounded-full px-8 py-4 font-bold transition-all duration-300 inline-flex items-center justify-center gap-2"
                            >
                                🍽️ Ver rações em promoção
                            </a>
                        </div>

                        <p className="text-white/70 text-xs mt-6">
                            Links de afiliado Amazon — se comprares, recebemos uma pequena comissão sem custo extra para ti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
