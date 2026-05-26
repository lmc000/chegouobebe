import { Cat, Instagram, Facebook, Youtube, Mail } from "lucide-react";

const FOOTER_LINKS = {
    Navegação: ["Início", "Categorias", "Top Produtos", "Blog"],
    Categorias: ["Alimentação", "Higiene", "Conforto", "Diversão", "Viagens", "Saúde"],
    Sobre: ["Quem somos", "Como avaliamos", "Contactos", "Política de Privacidade"],
};

const SOCIAL = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "Youtube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:ola@coisasparagatos.pt" },
];

export const FooterSection = () => {
    return (
        <footer
            data-testid="site-footer"
            className="bg-[#5C463A] text-[#FFE9D6] rounded-t-[40px] mt-12 px-6 md:px-12 lg:px-24 pt-16 md:pt-20 pb-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-12 border-b border-[#FFE9D6]/15">
                    {/* Brand block */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-10 h-10 rounded-full bg-[#FF9F87] flex items-center justify-center">
                                <Cat className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </span>
                            <span className="font-extrabold text-2xl text-white">
                                Coisas para Gatos
                            </span>
                        </div>
                        <p className="text-[#FFE9D6]/75 leading-relaxed max-w-sm mb-6">
                            Ajudamos donos de gatos em Portugal a encontrarem
                            os melhores produtos — com análises honestas,
                            comparações práticas e zero enrolação.
                        </p>
                        <div className="flex items-center gap-3">
                            {SOCIAL.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        data-testid={`social-${s.label.toLowerCase()}`}
                                        className="w-10 h-10 rounded-full bg-[#FFE9D6]/10 hover:bg-[#FF9F87] flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5"
                                    >
                                        <Icon className="w-4 h-4 text-[#FFE9D6] group-hover:text-white" strokeWidth={2.25} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-extrabold text-white mb-4 text-base">
                                {title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, "-")}`}
                                            className="text-[#FFE9D6]/75 hover:text-[#FF9F87] text-sm font-medium transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Affiliate disclaimer */}
                <div
                    data-testid="affiliate-disclaimer"
                    className="py-8 border-b border-[#FFE9D6]/15"
                >
                    <p className="text-[#FFE9D6]/55 text-xs leading-relaxed max-w-4xl">
                        <strong className="text-[#FFE9D6]/80">Aviso de afiliação:</strong>{" "}
                        A Coisas para Gatos participa no Programa de Afiliados
                        da Amazon EU, um programa de publicidade de afiliados
                        concebido para proporcionar um meio dos sites ganharem
                        comissões de publicidade através da criação de links
                        para a Amazon.es. Como Afiliados da Amazon, ganhamos com
                        compras elegíveis — sem qualquer custo adicional para si.
                    </p>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
                    <p className="text-[#FFE9D6]/60 text-sm">
                        © {new Date().getFullYear()} Coisas para Gatos. Feito com 🧡 em Portugal.
                    </p>
                    <p className="text-[#FFE9D6]/60 text-sm flex items-center gap-1">
                        <span className="text-base">🐾</span>
                        Para gatos felizes e donos descansados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
