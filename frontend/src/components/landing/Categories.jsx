import { ShoppingCart, Moon, Utensils, Bath, Car, HeartPulse, Music, BookOpen, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
    { id: "carrinho",    label: "Carrinhos",   icon: ShoppingCart, desc: "Carrinhos e sistemas de viagem", color: "#D1F0EA" },
    { id: "sono",        label: "Sono",        icon: Moon,         desc: "Berços, monitores e sono",       color: "#C8EBE3" },
    { id: "alimentacao", label: "Alimentação", icon: Utensils,     desc: "Mamadeiras e cadeirinhas",       color: "#D1F0EA" },
    { id: "higiene",     label: "Higiene",     icon: Bath,         desc: "Banheiras e fraldas",            color: "#C8EBE3" },
    { id: "seguranca",   label: "Segurança",   icon: Car,          desc: "Bebê conforto e portões",        color: "#D1F0EA" },
    { id: "saude",       label: "Saúde",       icon: HeartPulse,   desc: "Termômetros e aspiradores",      color: "#C8EBE3" },
    { id: "estimulacao", label: "Estimulação", icon: Music,        desc: "Brinquedos e desenvolvimento",   color: "#D1F0EA" },
    { id: "gravidez",    label: "Gravidez",    icon: BookOpen,     desc: "Enxoval e preparação",           color: "#C8EBE3" },
    { id: "cuidados",    label: "Cuidadores",  icon: Baby,         desc: "Babás e berçaristas",            color: "#D1F0EA" },
];

export const Categories = () => {
    return (
        <section id="categorias" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-[#D1F0EA] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            🍼 Explore por categoria
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A3C38] leading-tight">
                            Tudo o que o seu bebê precisa,
                            <br />num só lugar.
                        </h2>
                    </div>
                    <p className="text-[#3A6B64] text-base md:text-lg max-w-md">
                        Seleção curada por categoria. Comparações honestas para encontrar o produto certo.
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link key={cat.id} to={`/blog?categoria=${cat.id}`}
                                className="group bg-white rounded-3xl border border-[#D1F0EA] p-4 md:p-5 aspect-square flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#2A9D8F]">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-2 transition-all group-hover:scale-110"
                                    style={{ backgroundColor: cat.color }}>
                                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#2A9D8F]" strokeWidth={2.25} />
                                </div>
                                <span className="font-bold text-[#1A3C38] text-xs md:text-sm">{cat.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
