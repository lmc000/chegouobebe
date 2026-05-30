import { BookOpen, CheckCircle, Star, Download, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// 🔧 SUBSTITUI ESTE LINK PELO TEU LINK DO GUMROAD
const GUMROAD_URL = "mysticosta4.gumroad.com/l/alimentacao_gatos";

const BENEFICIOS = [
  "Necessidades nutricionais por fase de vida — gatinho, adulto e sénior",
  "Tabelas de quantidades por peso corporal",
  "Planos semanais detalhados dia a dia",
  "Como ler rótulos de ração — o que realmente importa",
  "Comparação de marcas disponíveis em Portugal",
  "Suplementos recomendados por veterinários",
  "Lista completa de alimentos tóxicos",
  "Sinais de alerta e quando ir ao veterinário",
];

export const EbookSection = () => {
  return (
    <section
      id="ebook"
      data-testid="ebook-section"
      className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0a05 0%, #3d1a0a 50%, #1a0a05 100%)",
      }}
    >
      {/* Decoração de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #FF9F87 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FF6B35 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Esquerda — capa do ebook */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Sombra/glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-40 scale-95"
                style={{ background: "#FF6B35" }}
              />
              {/* Capa simulada */}
              <div
                className="relative w-64 sm:w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                style={{ background: "linear-gradient(160deg, #FF6B35 0%, #E55A24 100%)" }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                  Edição 2026
                </div>

                <div className="p-8 pt-12 pb-10 text-center flex flex-col items-center gap-4">
                  <div className="text-5xl">🐾</div>
                  <div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                      Plano de Alimentação Semanal
                    </p>
                    <h3 className="text-white font-black text-3xl leading-tight">
                      PARA GATOS
                    </h3>
                    <p className="text-white/60 text-sm italic mt-2">
                      Guia Técnico Completo
                    </p>
                  </div>
                  <div
                    className="w-full h-px opacity-30"
                    style={{ background: "white" }}
                  />
                  <div className="text-white/70 text-xs space-y-1">
                    <p>Gatinho · Adulto · Sénior</p>
                    <p>29 páginas · Tabelas · Protocolos</p>
                  </div>
                </div>

                {/* Rodapé da capa */}
                <div className="bg-black/20 px-6 py-3 text-center">
                  <p className="text-white/60 text-xs font-bold tracking-wider">
                    CoisasParaGatos.pt
                  </p>
                </div>
              </div>

              {/* Badge flutuante — preço */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border-2 border-white/20 font-black"
                style={{ background: "#FF6B35" }}
              >
                <span className="text-white/70 text-xs">apenas</span>
                <span className="text-white text-xl leading-none">9,99€</span>
              </div>
            </div>
          </div>

          {/* Direita — copy de venda */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-orange-300 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              E-book em PDF — download imediato
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              O guia que o teu gato{" "}
              <span style={{ color: "#FF9F87" }}>merecia ter</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              29 páginas de nutrição felina baseadas em ciência — para donos que
              querem fazer mais do que seguir as instruções genéricas da embalagem.
            </p>

            {/* Benefícios */}
            <ul className="space-y-3 mb-10">
              {BENEFICIOS.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#FF9F87" }}
                  />
                  <span className="text-white/80 text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F9A826] text-[#F9A826]"
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <strong className="text-white">Novo lançamento</strong> —
                baseado em investigação veterinária atual (AAFCO & FEDIAF)
              </p>
            </div>

            {/* CTA principal */}
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="ebook-cta-button"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-black text-lg text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #E55A24 100%)",
              }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Comprar por 9,99€
            </a>

            {/* Garantias */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-white/50 text-xs">
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                PDF instantâneo
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                Pagamento seguro (Gumroad)
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Acesso vitalício
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection;
