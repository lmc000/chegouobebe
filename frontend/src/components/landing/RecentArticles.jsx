import { Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ARTICLES = [
    {
        id: "melhor-fonte-agua-gatos",
        tag: "Guia de Compra",
        tagColor: "#FFE9D6",
        tagText: "#5C463A",
        title: "Melhor Fonte de Água para Gatos em Portugal (2026)",
        excerpt:
            "Comparámos 5 modelos. Descubra qual a melhor para apartamento, casa com vários gatos e qual a mais silenciosa.",
        image: "https://images.pexels.com/photos/5822458/pexels-photo-5822458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        readTime: "7 min",
        category: "Saúde",
    },
    {
        id: "melhor-caixa-areia-gatos-apartamento",
        tag: "Guia de Compra",
        tagColor: "#FFD6C2",
        tagText: "#5C463A",
        title: "Melhor Caixa de Areia para Gatos em Apartamento (2026)",
        excerpt:
            "Modelos fechados, automáticos e sem odor. Guia honesto para acabar com o cheiro em casa.",
        image: "https://images.unsplash.com/photo-1770751857462-4954bffba866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxjYXQlMjBwbGF5aW5nJTIwd2l0aCUyMHRveXxlbnwwfHx8fDE3Nzk4MDg1Mjd8MA&ixlib=rb-4.1.0&q=85",
        readTime: "8 min",
        category: "Higiene",
    },
    {
        id: "gato-nao-bebe-agua-o-que-fazer",
        tag: "Comportamento",
        tagColor: "#FFE9D6",
        tagText: "#5C463A",
        title: "O Meu Gato Não Bebe Água — O Que Fazer?",
        excerpt:
            "Causas mais comuns, sinais de alerta e 5 soluções práticas que funcionam mesmo.",
        image: "https://images.pexels.com/photos/30001432/pexels-photo-30001432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        readTime: "6 min",
        category: "Saúde",
    },
];

export const RecentArticles = () => {
    return (
        <section
            id="blog"
            data-testid="articles-section"
            className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span
                            data-testid="articles-eyebrow"
                            className="inline-block bg-[#FFE9D6] text-[#5C463A] text-sm font-bold px-4 py-1.5 rounded-full mb-4"
                        >
                            📖 Do nosso blog
                        </span>
                        <h2
                            data-testid="articles-title"
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#5C463A] leading-tight"
                        >
                            Guias e dicas que valem o seu tempo.
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        data-testid="view-all-articles-link"
                        className="text-[#FF8A6E] font-bold hover:underline self-start md:self-end whitespace-nowrap"
                    >
                        Ver todos os artigos →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {ARTICLES.map((article) => (
                        <Link
                            key={article.id}
                            to={`/blog/${article.id}`}
                            data-testid={`article-card-${article.id}`}
                            className="bg-white rounded-3xl border border-[#F2E3D8] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_20px_40px_rgb(92,70,58,0.12)] hover:-translate-y-1"
                        >
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <span
                                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full"
                                    style={{
                                        backgroundColor: article.tagColor,
                                        color: article.tagText,
                                    }}
                                >
                                    {article.tag}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <div className="flex items-center gap-3 text-xs text-[#8C776D] font-semibold">
                                    <span className="text-[#FF8A6E] uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <span className="text-[#F2E3D8]">•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {article.readTime}
                                    </span>
                                </div>

                                <h3 className="font-extrabold text-[#5C463A] text-xl leading-tight group-hover:text-[#FF8A6E] transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-[#8C776D] leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div
                                    data-testid={`article-read-more-${article.id}`}
                                    className="text-[#FF8A6E] font-bold text-sm mt-auto flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Ler artigo
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
