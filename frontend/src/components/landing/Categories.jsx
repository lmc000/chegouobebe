import { Fish, Droplets, Moon, Gamepad2, Plane, HeartPulse, ArrowRight } from "lucide-react";

const CATEGORIES = [
    {
        id: "alimentacao",
        label: "Alimentação",
        icon: Fish,
        desc: "Comedouros, fontes e dispensadores",
        color: "#FFE9D6",
    },
    {
        id: "higiene",
        label: "Higiene",
        icon: Droplets,
        desc: "Areias, caixas e limpeza",
        color: "#FFD6C2",
    },
    {
        id: "conforto",
        label: "Conforto",
        icon: Moon,
        desc: "Camas, mantas e aconchego",
        color: "#FFE9D6",
    },
    {
        id: "diversao",
        label: "Diversão",
        icon: Gamepad2,
        desc: "Brinquedos e arranhadores",
        color: "#FFD6C2",
    },
    {
        id: "viagens",
        label: "Viagens",
        icon: Plane,
        desc: "Mochilas, GPS e transportadoras",
        color: "#FFE9D6",
    },
    {
        id: "saude",
        label: "Saúde",
        icon: HeartPulse,
        desc: "Escovas, suplementos e bem-estar",
        color: "#FFD6C2",
    },
];

export const Categories = () => {
    return (
        <section
            id="categorias"
            data-testid="categories-section"
            className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span
                            data-testid="categories-eyebrow"
                            className="inline-block bg-[#FFE9D6] text-[#5C463A] text-sm font-bold px-4 py-1.5 rounded-full mb-4"
                        >
                            🐾 Explore por necessidade
                        </span>
                        <h2
                            data-testid="categories-title"
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#5C463A] leading-tight"
                        >
                            Tudo o que o seu gato precisa,
                            <br />
                            num só lugar.
                        </h2>
                    </div>
                    <p
                        data-testid="categories-description"
                        className="text-[#8C776D] text-base md:text-lg max-w-md"
                    >
                        Seleção curada por categoria. Comparações honestas para
                        encontrar o produto certo sem perder horas.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                data-testid={`category-card-${cat.id}`}
                                className="group bg-white rounded-3xl border border-[#F2E3D8] p-5 md:p-6 aspect-square flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgb(92,70,58,0.12)] hover:-translate-y-1 hover:border-[#FFC4A3]"
                            >
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 transition-all group-hover:scale-110 group-hover:rotate-6"
                                    style={{ backgroundColor: cat.color }}
                                >
                                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#FF8A6E]" strokeWidth={2.25} />
                                </div>
                                <span className="font-bold text-[#5C463A] text-sm md:text-base">
                                    {cat.label}
                                </span>
                                <span className="text-xs text-[#8C776D] mt-1 hidden md:block">
                                    {cat.desc}
                                </span>
                                <ArrowRight className="w-4 h-4 text-[#FF9F87] opacity-0 group-hover:opacity-100 transition-all mt-2 group-hover:translate-x-1" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
