import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/FooterSection";

export default function Privacidade() {
    return (
        <div className="min-h-screen bg-[#F5FAFA]">
            <Header />
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] mb-2">Política de Privacidade</h1>
                    <p className="text-[#3D6B65] text-sm mb-10">Última actualização: Junho de 2026</p>
                    <div className="space-y-8 text-[#1A3C38]">
                        <section>
                            <h2 className="text-xl font-bold mb-3">1. Quem somos</h2>
                            <p className="leading-relaxed text-[#3D6B65]">BebéFeliz.pt é um site de reviews e guias de produtos para pais e bebés em Portugal, operado a título individual.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-3">2. Dados recolhidos</h2>
                            <p className="leading-relaxed text-[#3D6B65] mb-3">Este site não recolhe dados pessoais directamente. Utilizamos serviços de terceiros:</p>
                            <ul className="list-disc list-inside space-y-2 text-[#3D6B65]">
                                <li><strong>Google Analytics</strong> — dados de tráfego anónimos</li>
                                <li><strong>Google AdSense</strong> — cookies para anúncios relevantes</li>
                                <li><strong>Amazon Associates</strong> — cookies para rastrear compras via links de afiliado</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-3">3. Cookies</h2>
                            <p className="leading-relaxed text-[#3D6B65]">Utilizamos cookies essenciais, de análise (Google Analytics), publicidade (Google AdSense) e afiliado (Amazon Associates). Podes desactivar cookies nas definições do teu browser.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-3">4. Links de afiliado</h2>
                            <p className="leading-relaxed text-[#3D6B65]">Este site participa no Programa de Afiliados da Amazon (Amazon Associates). Recebemos uma pequena comissão por compras feitas através dos nossos links, sem custo adicional para si. As nossas reviews são sempre honestas e independentes.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-3">5. Os teus direitos (RGPD)</h2>
                            <ul className="list-disc list-inside space-y-2 text-[#3D6B65]">
                                <li>Direito de acesso, rectificação e apagamento dos dados</li>
                                <li>Direito à portabilidade e oposição ao tratamento</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-3">6. Google AdSense</h2>
                            <p className="leading-relaxed text-[#3D6B65]">Podes optar por não receber anúncios personalizados em <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#2A9D8F] hover:underline">google.com/settings/ads</a>.</p>
                        </section>
                    </div>
                    <div className="mt-12 p-6 bg-[#E8F5F3] rounded-3xl border border-[#C8E8E4]">
                        <p className="text-[#1A3C38] text-sm leading-relaxed">
                            <strong>Resumo simples:</strong> Não recolhemos os teus dados pessoais. Usamos Google Analytics para estatísticas, AdSense para anúncios, e temos links de afiliado Amazon. Tudo transparente e de acordo com o RGPD.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Link to="/" className="text-[#2A9D8F] font-semibold hover:underline">← Voltar ao início</Link>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
