import { Star, ExternalLink, Trophy, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        id: "fonte-agua-catit",
        name: "Petkit Eversweet — Fonte de Água",
        tag: "Mais Vendido",
        tagColor: "#F9A826",
        rating: 4.5,
        reviews: 2348,
        price: "99,99 €",
        oldPrice: "89,99 €",
        image: "https://images.pexels.com/photos/5822458/pexels-photo-5822458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        pitch: "Aço Inoxidável, Bomba Sem Fio, Controle de App, 1,8L, Ultrasilenciosa, Filtro Triplo.",
        category: "Alimentação",
        amazonUrl: "https://www.amazon.es/s?k=petkit+eversweet+3+pro&tag=coisasparagat-21",
        artigoSlug: "melhor-fonte-agua-gatos",
    },
    {
        id: "areia-tofu-pidan",
        name: "Pidan Areia de Tofu Biodegradável 6L",
        tag: "Eco-Friendly",
        tagColor: "#85C296",
        rating: 4.4,
        reviews: 1872,
        price: "59,90 €",
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1770751857462-4954bffba866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxjYXQlMjBwbGF5aW5nJTIwd2l0aCUyMHRveXxlbnwwfHx8fDE3Nzk4MDg1Mjd8MA&ixlib=rb-4.1.0&q=85",
        pitch: "Pack 4 (4 x 2,4 kg/6 l) - Aglomerante, sem cheiro e descarga direta na sanita. Ideal para apartamento.",
        category: "Higiene",
        amazonUrl: "https://www.amazon.es/s?k=pidan+areia+tofu&tag=coisasparagat-21",
        artigoSlug: "melhor-caixa-areia-gatos-apartamento",
    },
    {
        id: "arranhador-feandrea",
        name: "Feandrea Árvore com Arranhador XXL",
        tag: "Recomendado",
        tagColor: "#FF9F87",
        rating: 4.4,
        reviews: 956,
        price: "45,90 €",
        oldPrice: "59,90 €",
        image: "https://images.pexels.com/photos/32960962/pexels-photo-32960962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        pitch: "Sisal robusto, plataformas e brinquedo incluído. Ideal para gatos de interior.",
        category: "Conforto",
        amazonUrl: "https://www.amazon.es/s?k=feandrea+arvore+gato+arranhador&tag=coisasparagat-21",
        artigoSlug: "melhor-arranhador-gatos",
    },
    {
        id: "racao-proplan",
        name: "Purina Pro Plan Adult — Ração para Gato",
        tag: "Top Qualidade-Preço",
        tagColor: "#5C463A",
        rating: 4.7,
        reviews: 1204,
        price: "59,90 €",
        oldPrice: null,
        image: "https://images.pexels.com/photos/30001432/pexels-photo-30001432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        pitch: "10kg - Frango como primeiro ingrediente, alto teor de proteína. A nossa recomendação padrão.",
        category: "Alimentação",
        amazonUrl: "https://www.amazon.es/s?k=purina+pro+plan+adult+cat&tag=coisasparagat-21",
        artigoSlug: "melhor-racao-gato-adulto-portugal",
    },
];

export const FeaturedProducts = () => {
    return (
        <section
            id="produtos"
            data-testid="featured-products-section"
            className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5EC]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span
                            className="inline-flex items-center gap-2 bg-[#FFE9D6] text-[#5C463A] text-sm font-bold px-4 py-1.5 rounded-full mb-4"
                            data-testid="products-eyebrow"
                        >
                            <Trophy className="w-4 h-4" /> Os favoritos do mês
                        </span>
                        <h2
                            data-testid="products-title"
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#5C463A] leading-tight"
                        >
                            Os Favoritos dos Felinos 🐱
                        </h2>
                        <p className="text-[#8C776D] text-base md:text-lg mt-3 max-w-xl">
                            Os 4 produtos mais recomendados — testados, comparados
                            e aprovados pelos nossos leitores.
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        data-testid="view-all-products-link"
                        className="text-[#FF8A6E] font-bold hover:underline self-start md:self-end whitespace-nowrap"
                    >
                        Ver todos os guias →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {PRODUCTS.map((product) => (
                        <article
                            key={product.id}
                            data-testid={`product-card-${product.id}`}
                            className="bg-white rounded-3xl border border-[#F2E3D8] p-4 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(92,70,58,0.12)] hover:-translate-y-1 group"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-[#FFE9D6]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <span
                                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                                    style={{ backgroundColor: product.tagColor }}
                                >
                                    {product.tag}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 flex-1">
                                <span className="text-xs font-bold text-[#FF8A6E] uppercase tracking-wider">
                                    {product.category}
                                </span>
                                <h3 className="font-extrabold text-[#5C463A] text-lg leading-tight line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-[#8C776D] leading-relaxed line-clamp-2">
                                    {product.pitch}
                                </p>

                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(product.rating)
                                                        ? "fill-[#F9A826] text-[#F9A826]"
                                                        : "text-[#F2E3D8]"
                                                }`}
                                            />
                                        ))}
                                    </span>
                                    <span className="text-xs font-bold text-[#5C463A]">
                                        {product.rating}
                                    </span>
                                    <span className="text-xs text-[#8C776D]">
                                        ({product.reviews.toLocaleString("pt-PT")})
                                    </span>
                                </div>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-[#5C463A]">
                                        {product.price}
                                    </span>
                                    {product.oldPrice && (
                                        <span className="text-sm text-[#8C776D] line-through">
                                            {product.oldPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Botão Amazon */}
                                <a
                                    href={product.amazonUrl}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    data-testid={`affiliate-link-${product.id}`}
                                    className="bg-[#F9A826] hover:bg-[#F29A15] text-white rounded-full px-4 py-3 font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-1"
                                >
                                    Ver na Amazon
                                    <ExternalLink className="w-4 h-4" />
                                </a>

                                {/* Link para artigo do blog */}
                                <Link
                                    to={`/blog/${product.artigoSlug}`}
                                    className="text-[#FF8A6E] hover:text-[#FF6B4A] font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
                                >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    Ler review completa
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Disclaimer afiliados */}
                <p className="text-center text-xs text-[#8C776D] mt-10">
                    Os preços são indicativos e podem variar. Os links "Ver na Amazon" são links de afiliado — se comprares, recebemos uma pequena comissão sem custo extra para ti.
                </p>
            </div>
        </section>
    );
};

export default FeaturedProducts;
