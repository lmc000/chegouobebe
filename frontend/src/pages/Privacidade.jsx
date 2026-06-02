import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/FooterSection";

export default function Privacidade() {
    return (
        <div className="min-h-screen bg-[#FFFDF9]">
            <Header />
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#5C463A] mb-2">
                        Política de Privacidade
                    </h1>
                    <p className="text-[#8C7B74] text-sm mb-10">Última actualização: Junho de 2026</p>

                    <div className="space-y-8 text-[#5C463A]">

                        <section>
                            <h2 className="text-xl font-bold mb-3">1. Quem somos</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                CoisasParaGatos.pt é um site de reviews e guias de produtos para donos de gatos em Portugal.
                                Este site é operado a título individual e pode ser contactado através do endereço de email
                                disponível no site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">2. Que dados recolhemos</h2>
                            <p className="leading-relaxed text-[#6B5B54] mb-3">
                                Este site não recolhe dados pessoais directamente. No entanto, utilizamos serviços de
                                terceiros que podem recolher dados de utilização anónimos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-[#6B5B54]">
                                <li><strong>Google Analytics / Vercel Analytics</strong> — dados de tráfego anónimos (páginas visitadas, tempo no site, país de origem)</li>
                                <li><strong>Google AdSense</strong> — utiliza cookies para mostrar anúncios relevantes</li>
                                <li><strong>Amazon Associates</strong> — quando clicas num link de afiliado, a Amazon pode utilizar cookies para rastrear a compra</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">3. Cookies</h2>
                            <p className="leading-relaxed text-[#6B5B54] mb-3">
                                Este site utiliza cookies para as seguintes finalidades:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-[#6B5B54]">
                                <li><strong>Cookies essenciais</strong> — necessários para o funcionamento básico do site</li>
                                <li><strong>Cookies de análise</strong> — Google Analytics para compreender como os visitantes usam o site</li>
                                <li><strong>Cookies de publicidade</strong> — Google AdSense para mostrar anúncios relevantes</li>
                                <li><strong>Cookies de afiliado</strong> — Amazon Associates para rastrear compras feitas através dos nossos links</li>
                            </ul>
                            <p className="leading-relaxed text-[#6B5B54] mt-3">
                                Podes desactivar os cookies nas definições do teu browser a qualquer momento.
                                Nota que desactivar cookies pode afectar a funcionalidade de alguns elementos do site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">4. Links de afiliado</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                Este site participa no Programa de Afiliados da Amazon (Amazon Associates).
                                Isto significa que alguns links para produtos na Amazon contêm um código de rastreamento.
                                Se comprares um produto através de um desses links, recebemos uma pequena comissão
                                sem qualquer custo adicional para ti. Esta comissão ajuda a manter o site activo e a
                                produzir conteúdo gratuito de qualidade. Todos os artigos e reviews são honestos e
                                independentes — as comissões não influenciam as nossas recomendações.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">5. Google AdSense</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                Este site utiliza o Google AdSense para mostrar anúncios. O Google pode usar cookies
                                para mostrar anúncios baseados nas tuas visitas anteriores a este e outros sites.
                                Podes optar por não receber anúncios personalizados em{" "}
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
                                    className="text-[#FF6B35] hover:underline">
                                    google.com/settings/ads
                                </a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">6. Os teus direitos (RGPD)</h2>
                            <p className="leading-relaxed text-[#6B5B54] mb-3">
                                De acordo com o Regulamento Geral de Protecção de Dados (RGPD), tens os seguintes direitos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-[#6B5B54]">
                                <li>Direito de acesso aos teus dados pessoais</li>
                                <li>Direito de rectificação de dados incorrectos</li>
                                <li>Direito ao apagamento dos teus dados</li>
                                <li>Direito à portabilidade dos dados</li>
                                <li>Direito de oposição ao tratamento dos dados</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">7. Retenção de dados</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                Não armazenamos dados pessoais nos nossos servidores. Os dados recolhidos pelos
                                serviços de terceiros (Google Analytics, AdSense, Amazon) são tratados de acordo
                                com as políticas de privacidade dessas empresas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">8. Alterações a esta política</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                Esta política de privacidade pode ser actualizada ocasionalmente. Recomendamos que
                                a consultes periodicamente. A data da última actualização está indicada no topo desta página.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">9. Contacto</h2>
                            <p className="leading-relaxed text-[#6B5B54]">
                                Se tiveres dúvidas sobre esta política de privacidade ou sobre o tratamento dos teus
                                dados, podes contactar-nos através da página de contacto do site.
                            </p>
                        </section>

                    </div>

                    <div className="mt-12 p-6 bg-[#FFF0E8] rounded-3xl border border-[#FFD4C0]">
                        <p className="text-[#5C463A] text-sm leading-relaxed">
                            <strong>Resumo simples:</strong> Não recolhemos os teus dados pessoais directamente.
                            Usamos o Google Analytics para ver quantas pessoas visitam o site, o Google AdSense
                            para mostrar anúncios, e temos links de afiliado Amazon pelos quais recebemos uma
                            pequena comissão se comprares algo. Tudo transparente e de acordo com o RGPD.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link to="/" className="text-[#FF6B35] font-semibold hover:underline">
                            ← Voltar ao início
                        </Link>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
