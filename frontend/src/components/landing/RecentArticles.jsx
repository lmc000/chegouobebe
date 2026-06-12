import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import artigos from "../../data/artigos";

const CAT_LABELS = {
    carrinho:    "Carrinhos",
    sono:        "Sono",
    alimentacao: "Alimentação",
    higiene:     "Higiene",
    seguranca:   "Segurança",
    saude:       "Saúde",
    estimulacao: "Estimulação",
    gravidez:    "Gravidez",
    cuidados:    "Cuidadores",
};

const ARTIGO_IMGS = {
    // Artigos Brasil
    "gestacao-paternidade-responsavel-guia-completo":   "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80",
    "paternidade-responsavel-guia-papai-de-primeira":   "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80",
    "melhor-carrinho-bebe-brasil":                      "/images/carrinho-bebe.jpg",
    "melhor-berco-bebe":                                "/images/berco-chicco.jpg",
    "melhor-bebe-conforto-brasil":                      "/images/cadeira-auto.jpg",
    "melhor-mamadeira-bebe":                            "/images/biberon-philips.jpg",
    "melhor-monitor-bebe":                              "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80",
    "introducao-alimentar-bebe":                        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&q=80",
    "melhor-cadeirinha-papa-bebe":                      "https://images.unsplash.com/photo-1578307990016-f1dfbddf76fc?w=400&q=80",
    "bebe-nao-dorme-solucoes":                          "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&q=80",
    "melhor-banheira-bebe":                             "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    "quanto-custa-ter-bebe-brasil":                     "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80",
    "melhor-extrator-de-leite":                         "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&q=80",
    "melhor-brinquedo-bebe-0-12-meses":                 "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80",
    "produtos-indispensaveis-recem-nascido":            "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80",
    "melhor-termometro-bebe":                           "https://images.unsplash.com/photo-1631248055855-4b78c5d0f396?w=400&q=80",
    "lista-enxoval-bebe-completa":                      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80",
    "bugaboo-fox-5-vs-joolz-day-plus":                  "/images/carrinho-bugaboo.jpg",
    "curso-baba-babysitter-guia-completo":              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
    "curso-bercario-bercaristaguia":                    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&q=80",
};

const DEFAULT_IMG = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80";

// Mostra os 3 primeiros artigos de produto (skip os de curso/paternidade)
const SLUGS_DESTAQUE = [
    "melhor-carrinho-bebe-brasil",
    "melhor-berco-bebe",
    "melhor-bebe-conforto-brasil",
];

export const RecentArticles = () => {
    const recentes = artigos.filter((a) => SLUGS_DESTAQUE.includes(a.slug))
        .sort((a, b) => SLUGS_DESTAQUE.indexOf(a.slug) - SLUGS_DESTAQUE.indexOf(b.slug));

    return (
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="inline-block bg-[#E8F5F3] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            📖 Do nosso blog
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] tracking-tight">
                            Guias e dicas que valem o seu tempo.
                        </h2>
                    </div>
                    <Link to="/blog" className="flex items-center gap-2 text-[#2A9D8F] font-bold hover:underline whitespace-nowrap">
                        Ver todos os artigos <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentes.map((artigo) => (
                        <Link key={artigo.slug} to={`/blog/${artigo.slug}`}
                            className="group bg-white rounded-3xl border border-[#E8F5F3] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={ARTIGO_IMGS[artigo.slug] || DEFAULT_IMG}
                                    alt={artigo.titulo}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1A3C38] text-xs font-bold px-3 py-1 rounded-full">
                                    Guia de Compra
                                </span>
                            </div>
                            <div className="p-5 flex flex-col gap-2 flex-1">
                                <div className="flex items-center gap-3 text-xs">
                                    <span className="text-[#2A9D8F] font-bold uppercase tracking-wide">
                                        {CAT_LABELS[artigo.categoria] || artigo.categoria}
                                    </span>
                                    <span className="text-[#3D6B65]">•</span>
                                    <span className="flex items-center gap-1 text-[#3D6B65]">
                                        <Clock className="w-3 h-3" /> {artigo.tempoLeitura} min
                                    </span>
                                </div>
                                <h3 className="font-bold text-[#1A3C38] text-base leading-snug group-hover:text-[#2A9D8F] transition-colors">
                                    {artigo.titulo}
                                </h3>
                                <p className="text-[#3D6B65] text-sm leading-relaxed line-clamp-2">{artigo.descricao}</p>
                                <span className="flex items-center gap-1 text-[#2A9D8F] font-semibold text-sm mt-auto pt-2">
                                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
