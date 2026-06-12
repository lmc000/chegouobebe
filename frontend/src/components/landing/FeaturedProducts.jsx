import { Star, ExternalLink, ArrowRight, BookOpen } from "lucide-react";
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
        urlAmazon: "https://www.amazon.com.br/s?k=bugaboo+fox+5&tag=chegouobebe-20",
        urlShopee: "https://s.shopee.com.br/80AFQlTt7E",
        slug: "melhor-carrinho-bebe-brasil",
        img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80",
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
        urlAmazon: "https://www.amazon.com.br/s?k=chicco+next2me+forever&tag=chegouobebe-20",
        urlShopee: "https://s.shopee.com.br/80AFQlTt7E",
        slug: "melhor-berco-bebe",
        img: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&q=80",
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
        urlAmazon: "https://www.amazon.com.br/s?k=maxi+cosi+pebble+360&tag=chegouobebe-20",
        urlShopee: "https://s.shopee.com.br/80AFQlTt7E",
        slug: "melhor-bebe-conforto-brasil",
        img: "https://images.unsplash.com/photo-1578307990016-f1dfbddf76fc?w=400&q=80",
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
        urlAmazon: "https://www.amazon.com.br/s?k=philips+avent+natural+response&tag=chegouobebe-20",
        urlShopee: "https://s.shopee.com.br/80AFQlTt7E",
        slug: "melhor-mamadeira-bebe",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    },
];

const CURSOS = [
    {
        nome: "Gestação e Paternidade Responsável",
        subtitulo: "Lá vem o bebê",
        tag: "🎓 Certificado p/ licença 20 dias",
        tagColor: "#2A9D8F",
        descricao: "Da gestação aos primeiros cuidados com o bebê. O certificado permite ampliar a licença paternidade de 5 para 20 dias.",
        estrelas: 4.8,
        destaques: ["Gestação semana a semana", "Direitos legais do pai", "Primeiros cuidados com o RN"],
        link: "https://trk.udemy.com/X4GWd4",
    },
    {
        nome: "Paternidade Responsável de A a Z",
        subtitulo: "Papais de Primeira",
        tag: "🎓 Certificado p/ licença 20 dias",
        tagColor: "#52B788",
        descricao: "Módulo completo sobre planejamento financeiro, cuidados no pré-parto, parto e pós-parto. Certificado homologado.",
        estrelas: 4.7,
        destaques: ["Planejamento financeiro", "Pré-parto e maternidade", "Primeiros meses de vida"],
        link: "https://trk.udemy.com/OYOznz",
    },
    {
        nome: "Curso de Babá e Babysitter",
        subtitulo: "Cuidadores Profissionais",
        tag: "👶 Certificado 30 horas",
        tagColor: "#F4A261",
        descricao: "Primeiros socorros, nutrição infantil, desenvolvimento da criança e rotinas. Para quem cuida de bebês profissionalmente.",
        estrelas: 4.6,
        destaques: ["Primeiros socorros infantis", "Nutrição e desenvolvimento", "Certificado reconhecido"],
        link: "https://trk.udemy.com/E0O29e",
    },
];

export const FeaturedProducts = () => {
    return (
        <>
            {/* PRODUTOS */}
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
                            <p className="text-[#3A6B64] mt-2">Os 4 produtos mais recomendados — comparados e aprovados por pais brasileiros.</p>
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
                                        <a href={prod.urlAmazon} target="_blank" rel="noopener sponsored"
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                            style={{ background: "linear-gradient(135deg, #2A9D8F, #1A8075)" }}>
                                            Ver na Amazon <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                        <a href={prod.urlShopee} target="_blank" rel="noopener sponsored"
                                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                            style={{ background: "linear-gradient(135deg, #EE4D2D, #CC3A1E)" }}>
                                            Ver na Shopee <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                        <Link to={`/blog/${prod.slug}`}
                                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-semibold text-sm text-[#2A9D8F] border border-[#D1F0EA] hover:bg-[#F0FAF8] transition-colors">
                                            📖 Ler review completa
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[#3A6B64] text-xs mt-6">
                        Links de afiliado Amazon e Shopee — se você comprar, recebemos uma pequena comissão sem custo extra.
                    </p>
                </div>
            </section>

            {/* CURSOS */}
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <span className="inline-block bg-[#E8F5F3] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            📚 Cursos recomendados
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] tracking-tight">
                            Prepare-se para a chegada do bebê
                        </h2>
                        <p className="text-[#3A6B64] mt-2 max-w-xl">
                            Cursos em português com certificado reconhecido. O certificado de paternidade responsável amplia a licença de 5 para 20 dias.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CURSOS.map((curso, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-[#D1F0EA] p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full text-white inline-block mb-3"
                                        style={{ backgroundColor: curso.tagColor }}>
                                        {curso.tag}
                                    </span>
                                    <h3 className="font-extrabold text-[#1A3C38] text-base leading-tight">{curso.nome}</h3>
                                    <p className="text-[#2A9D8F] text-xs font-semibold mt-0.5">{curso.subtitulo}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(curso.estrelas) ? "fill-[#F9A826] text-[#F9A826]" : "text-gray-200"}`} />
                                    ))}
                                    <span className="text-xs text-[#3A6B64] ml-1">{curso.estrelas}</span>
                                </div>
                                <p className="text-[#3A6B64] text-sm leading-relaxed flex-1">{curso.descricao}</p>
                                <ul className="space-y-1.5">
                                    {curso.destaques.map((d) => (
                                        <li key={d} className="flex items-center gap-2 text-sm text-[#1A3C38]">
                                            <span className="text-[#2A9D8F]">✓</span> {d}
                                        </li>
                                    ))}
                                </ul>
                                <a href={curso.link} target="_blank" rel="noopener sponsored"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
                                    style={{ background: "linear-gradient(135deg, #2A9D8F, #1A8075)" }}>
                                    <BookOpen className="w-4 h-4" />
                                    Ver curso na Udemy <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-[#3A6B64] text-xs mt-6">
                        Links de afiliado Udemy — se você comprar, recebemos uma pequena comissão sem custo extra.
                    </p>
                </div>
            </section>
        </>
    );
};

export default FeaturedProducts;
