import { Star, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PRODUTOS = [
    {
        nome: "Bugaboo Fox 5",
        categoria: "Carrinho",
        preco: "~R$ 8.000",
        estrelas: 4.9,
        reviews: 1847,
        descricao: "O carrinho mais versátil do mercado. Sistema modular, suspensão premium, adapta-se a qualquer terreno. O favorito dos pais brasileiros.",
        tag: "Mais Vendido",
        tagColor: "#2A9D8F",
        url: "https://www.amazon.com.br/s?k=bugaboo+fox+5&tag=PLACEHOLDER_AMAZON_TAG",
        urlRiHappy: "PLACEHOLDER_RIHAPPY_LINK",
        slug: "melhor-carrinho-bebe-brasil",
        img: "/images/carrinho-bugaboo.jpg",
    },
    {
        nome: "Chicco Next2Me Forever",
        categoria: "Sono",
        preco: "~R$ 2.500",
        estrelas: 4.8,
        reviews: 1243,
        descricao: "O berço de co-sleeping mais vendido. Encosta à cama dos pais, o bebê fica perto e seguro. Converte em berço independente até os 5 anos.",
        tag: "Recomendamos",
        tagColor: "#52B788",
        url: "https://www.amazon.com.br/s?k=chicco+next2me+forever&tag=PLACEHOLDER_AMAZON_TAG",
        urlRiHappy: "PLACEHOLDER_RIHAPPY_LINK",
        slug: "melhor-berco-bebe",
        img: "/images/berco-chicco.jpg",
    },
    {
        nome: "Maxi-Cosi Pebble 360",
        categoria: "Segurança",
        preco: "~R$ 3.500",
        estrelas: 4.9,
        reviews: 986,
        descricao: "Bebê conforto com rotação 360°. Facilita muito colocar e retirar o bebê, especialmente após cesárea. Certificado INMETRO.",
        tag: "Top Segurança",
        tagColor: "#E9C46A",
        url: "https://www.amazon.com.br/s?k=maxi+cosi+pebble+360&tag=PLACEHOLDER_AMAZON_TAG",
        urlRiHappy: "PLACEHOLDER_RIHAPPY_LINK",
        slug: "melhor-bebe-conforto-brasil",
        img: "/images/cadeira-auto-maxicosi.jpg",
    },
    {
        nome: "Philips Avent Natural",
        categoria: "Alimentação",
        preco: "~R$ 90",
        estrelas: 4.8,
        reviews: 3210,
        descricao: "A mamadeira mais recomendada pelas consultoras de amamentação. Tetina que imita o seio materno, ideal para combinar amamentação e mamadeira.",
        tag: "Mais Popular",
        tagColor: "#F4A261",
        url: "https://www.amazon.com.br/s?k=philips+avent+natural+response&tag=PLACEHOLDER_AMAZON_TAG",
        urlRiHappy: "PLACEHOLDER_RIHAPPY_LINK",
        slug: "melhor-mamadeira-bebe",
        img: "/images/biberon-philips.jpg",
    },
];

export const FeaturedProducts = () => {
    return (
        <section id="produtos" className="px-6 md:px-12 lg:px-24 py-20 md:py-28"
            style={{ background: "linear-gradient(180deg, #F0FAF8 0%, #E6F7F3 100%)" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="inline-block bg-[#D1F0EA] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            ⭐ Os favoritos do mês
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] tracking-tight">
                            Os Favoritos dos Bebês 🍀
                        </h2>
                        <p className="text-[#3A6B64] mt-2">Os 4 produtos mais recomendados — testados, comparados e aprovados por pais brasileiros.</p>
                    </div>
                    <Link to="/blog" className="flex items-center gap-2 text-[#2A9D8F] font-bold hover:underline whitespace-nowrap">
                        Ver todos os guias <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUTOS.map((prod, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-[#D1F0EA] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
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
                                    <span className="text-xs text-[#3A6B64] ml-1">{prod.estrelas} ({prod.reviews})</span>
                                </div>
                                <p className="text-[#3A6B64] text-sm leading-relaxed line-clamp-2">{prod.descricao}</p>

                                <div className="mt-auto pt-2 space-y-2">
                                    <p className="font-black text-[#1A3C38] text-lg">a partir de {prod.preco}</p>
                                    <a href={prod.url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                        style={{ background: "linear-gradient(135deg, #2A9D8F, #1A8075)" }}>
                                        Ver na Amazon <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    {prod.urlRiHappy && (
                                        <a href={prod.urlRiHappy} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                            style={{ background: "linear-gradient(135deg, #E05C97, #C0407A)" }}>
                                            Ver na Ri Happy <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    <Link to={`/blog/${prod.slug}`}
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-semibold text-sm text-[#2A9D8F] border border-[#D1F0EA] hover:bg-[#F0FAF8] transition-colors">
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
