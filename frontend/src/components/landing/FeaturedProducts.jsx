import { Star, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PRODUTOS = [
    {
        nome: "Bugaboo Fox 5",
        categoria: "Carrinho",
        preco: "~1.200€",
        estrelas: 4.9,
        reviews: 1847,
        descricao: "O carrinho mais versátil do mercado. Sistema modular, suspensão premium, adapta-se a qualquer terreno. O favorito dos pais portugueses.",
        tag: "Mais vendido",
        tagColor: "#2A9D8F",
        url: "https://www.amazon.es/s?k=bugaboo+fox+5&tag=bebefefeliz-21",
        slug: "melhor-carrinho-bebe-portugal",
        img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&q=80",
    },
    {
        nome: "Chicco Next2Me Forever",
        categoria: "Sono",
        preco: "~350€",
        estrelas: 4.8,
        reviews: 2341,
        descricao: "Co-sleeping seguro junto à cama dos pais. Converte em berço independente e cama de criança. Acompanha o bebé até aos 5 anos.",
        tag: "Recomendamos",
        tagColor: "#52B788",
        url: "https://www.amazon.es/s?k=chicco+next2me+forever&tag=bebefefeliz-21",
        slug: "melhor-berco-bebe",
        img: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&q=80",
    },
    {
        nome: "Maxi-Cosi Pebble 360",
        categoria: "Segurança",
        preco: "~450€",
        estrelas: 4.9,
        reviews: 1203,
        descricao: "Cadeira auto rotativa para recém-nascidos. Rotação 360° facilita entrada e saída. Aprovada i-Size, a mais segura do mercado.",
        tag: "Top Segurança",
        tagColor: "#E76F51",
        url: "https://www.amazon.es/s?k=maxi+cosi+pebble+360&tag=bebefefeliz-21",
        slug: "melhor-cadeira-auto-bebe",
        img: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=400&q=80",
    },
    {
        nome: "Philips Avent Natural",
        categoria: "Alimentação",
        preco: "~25€",
        estrelas: 4.7,
        reviews: 4521,
        descricao: "O biberão mais recomendado por pediatras. Design anti-cólicas, tetina que imita o seio materno. Facilita a combinação amamentação/biberão.",
        tag: "Mais popular",
        tagColor: "#F4A261",
        url: "https://www.amazon.es/s?k=philips+avent+natural+biberon&tag=bebefefeliz-21",
        slug: "melhor-biberon-bebe",
        img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80",
    },
];

export const FeaturedProducts = () => {
    return (
        <section id="produtos" className="px-6 md:px-12 lg:px-24 py-20 md:py-28"
            style={{ background: "linear-gradient(180deg, #F5FAFA 0%, #EDF7F5 100%)" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="inline-block bg-[#E8F5F3] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            ⭐ Os favoritos dos pais
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] tracking-tight">
                            Os Favoritos dos Bebés 👶
                        </h2>
                        <p className="text-[#3D6B65] mt-2">Os 4 produtos mais recomendados — testados e aprovados por pais portugueses.</p>
                    </div>
                    <Link to="/blog" className="flex items-center gap-2 text-[#2A9D8F] font-bold hover:underline whitespace-nowrap">
                        Ver todos os guias <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUTOS.map((prod, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-[#E8F5F3] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden">
                                <img src={prod.img} alt={prod.nome} className="w-full h-full object-cover" />
                                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm"
                                    style={{ backgroundColor: prod.tagColor }}>
                                    {prod.tag}
                                </span>
                            </div>
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <span className="text-xs text-[#2A9D8F] font-bold uppercase tracking-wide">{prod.categoria}</span>
                                <h3 className="font-extrabold text-[#1A3C38] text-base leading-tight">{prod.nome}</h3>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(prod.estrelas) ? "fill-[#F9A826] text-[#F9A826]" : "text-gray-200"}`} />
                                    ))}
                                    <span className="text-xs text-[#3D6B65] ml-1">{prod.estrelas} ({prod.reviews})</span>
                                </div>
                                <p className="text-[#3D6B65] text-sm leading-relaxed line-clamp-2">{prod.descricao}</p>
                                <div className="mt-auto pt-2 space-y-2">
                                    <p className="font-black text-[#1A3C38] text-lg">a partir de {prod.preco}</p>
                                    <a href={prod.url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                        style={{ background: "linear-gradient(135deg, #2A9D8F, #1B6B62)" }}>
                                        Ver na Amazon <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    <Link to={`/blog/${prod.slug}`}
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-semibold text-sm text-[#2A9D8F] border border-[#C8E8E4] hover:bg-[#E8F5F3] transition-colors">
                                        📖 Ler review completa
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
