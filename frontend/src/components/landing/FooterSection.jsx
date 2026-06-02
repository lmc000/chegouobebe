import { Cat, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIAL = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "Youtube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:ola@coisasparagatos.pt" },
];

const NAV_LINKS = [
    { label: "Início", href: "/" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Top Produtos", href: "/#produtos" },
    { label: "Blog", href: "/blog" },
];

const CAT_LINKS = [
    { label: "Alimentação", href: "/blog?categoria=alimentacao" },
    { label: "Higiene", href: "/blog?categoria=higiene" },
    { label: "Conforto", href: "/blog?categoria=conforto" },
    { label: "Diversão", href: "/blog?categoria=diversao" },
    { label: "Viagens", href: "/blog?categoria=viagens" },
    { label: "Saúde", href: "/blog?categoria=saude" },
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
                                        className="w-10 h-10 rounded-full bg-[#FFE9D6]/10 hover:bg-[#FF9F87] flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5"
                                    >
                                        <Icon className="w-4 h-4 text-[#FFE9D6]" strokeWidth={2.25} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h4 className="font-extrabold text-white mb-4 text-base">Navegação</h4>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith("/#") ? (
                                        <a href={link.href}
                                            className="text-[#FFE9D6]/75 hover:text-[#FF9F87] text-sm font-medium transition-colors">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link to={link.href}
                                            className="text-[#FFE9D6]/75 hover:text-[#FF9F87] text-sm font-medium transition-colors">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categorias */}
                    <div>
                        <h4 className="font-extrabold text-white mb-4 text-base">Categorias</h4>
                        <ul className="flex flex-col gap-3">
                            {CAT_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href}
                                        className="text-[#FFE9D6]/75 hover:text-[#FF9F87] text-sm font-medium transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-extrabold text-white mb-4 text-base">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link to="/privacidade"
                                    className="text-[#FFE9D6]/75 hover:text-[#FF9F87] text-sm font-medium transition-colors">
                                    Política de Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Affiliate disclaimer */}
                <div className="py-8 border-b border-[#FFE9D6]/15">
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
