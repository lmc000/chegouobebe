import { Baby, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterSection = () => {
    return (
        <footer className="bg-[#0D2420] text-white">
            <div className="px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-10 h-10 rounded-full bg-[#2A9D8F] flex items-center justify-center">
                                <Baby className="w-5 h-5 text-white" />
                            </span>
                            <span className="font-extrabold text-xl">Chegou o Bebê</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Ajudamos pais brasileiros a encontrar os melhores produtos para bebê — com análises honestas, comparações práticas e zero enrolação.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2A9D8F] flex items-center justify-center transition-colors">
                                    <Icon className="w-4 h-4 text-white/70" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Navegação</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
                            <li><a href="/#categorias" className="hover:text-white transition-colors">Categorias</a></li>
                            <li><a href="/#produtos" className="hover:text-white transition-colors">Top Produtos</a></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Categorias</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><Link to="/blog?categoria=carrinho" className="hover:text-white transition-colors">Carrinhos</Link></li>
                            <li><Link to="/blog?categoria=sono" className="hover:text-white transition-colors">Sono</Link></li>
                            <li><Link to="/blog?categoria=alimentacao" className="hover:text-white transition-colors">Alimentação</Link></li>
                            <li><Link to="/blog?categoria=higiene" className="hover:text-white transition-colors">Higiene</Link></li>
                            <li><Link to="/blog?categoria=seguranca" className="hover:text-white transition-colors">Segurança</Link></li>
                            <li><Link to="/blog?categoria=saude" className="hover:text-white transition-colors">Saúde</Link></li>
                            <li><Link to="/blog?categoria=estimulacao" className="hover:text-white transition-colors">Estimulação</Link></li>
                            <li><Link to="/blog?categoria=gravidez" className="hover:text-white transition-colors">Gravidez</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm mb-5 text-white uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 px-6 md:px-12 lg:px-24 py-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-white/30 text-xs leading-relaxed mb-4">
                        <strong className="text-white/50">Aviso de afiliação:</strong> O Chegou o Bebê participa no Programa de Afiliados da Amazon Brasil (Amazon Associates), no programa de afiliados da Ri Happy e da Bebê Store. Como afiliados, ganhamos comissão com compras qualificadas — sem nenhum custo adicional para você.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-white/30 text-xs">
                        <p>© 2026 Chegou o Bebê — chegouobebe.com.br. Feito com 🍼 no Brasil.</p>
                        <p>Para bebês felizes e pais tranquilos.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
