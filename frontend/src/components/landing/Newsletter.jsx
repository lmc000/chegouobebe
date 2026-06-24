import { ExternalLink } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-16"
            style={{ background: "linear-gradient(135deg, #1A3C38 0%, #2A6B5F 100%)" }}>
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-5xl mb-4">👶</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    O seu bebé merece o melhor
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                    Encontra os melhores produtos, guias de desenvolvimento e reviews honestas — tudo adaptado para Portugal.
                </p>
                <a href="https://www.amazon.es/?tag=bebefefeliz-21" target="_blank" rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white rounded-full px-8 py-4 font-bold text-lg transition-all hover:shadow-lg hover:opacity-90"
                    style={{ background: "#2A9D8F" }}>
                    Ver produtos na Amazon <ExternalLink className="w-5 h-5" />
                </a>
                <p className="text-white/40 text-sm mt-4">Links de afiliado — comissão sem custo adicional para si</p>
            </div>
        </section>
    );
};

export default Newsletter;
