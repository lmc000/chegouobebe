import { ShoppingCart, Moon, Utensils, Bath, Car, HeartPulse, Music, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
    { id: "carrinho", label: "Carrinhos", icon: ShoppingCart, desc: "Carrinhos e sistemas de viagem" },
    { id: "sono", label: "Sono", icon: Moon, desc: "Berços, camas e monitores" },
    { id: "alimentacao", label: "Alimentação", icon: Utensils, desc: "Biberões, papas e cadeiras" },
    { id: "higiene", label: "Higiene", icon: Bath, desc: "Banheira, fraldas e cuidados" },
    { id: "seguranca", label: "Segurança", icon: Car, desc: "Cadeiras auto e barreiras" },
    { id: "saude", label: "Saúde", icon: HeartPulse, desc: "Termómetros e aspiradores nasais" },
    { id: "estimulacao", label: "Estimulação", icon: Music, desc: "Brinquedos e desenvolvimento" },
    { id: "gravidez", label: "Gravidez", icon: BookOpen, desc: "Produtos para grávidas" },
];

export const Categories = () => {
    return (
        <section id="categorias" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-[#E8F5F3] text-[#2A9D8F] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            👶 Explore por categoria
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A3C38] leading-tight">
                            Tudo o que o seu bebé precisa,
                            <br />num só lugar.
                        </h2>
                    </div>
                    <p className="text-[#3D6B65] text-base md:text-lg max-w-md">
                        Selecção curada por categoria. Comparações honestas para as melhores escolhas.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link key={cat.id} to={`/blog?categoria=${cat.id}`}
                                className="group bg-white rounded-3xl border border-[#E8F5F3] p-4 md:p-5 aspect-square flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#2A9D8F]">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-2 transition-all group-hover:scale-110 bg-[#E8F5F3]">
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
