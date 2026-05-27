import { Link, useSearchParams } from "react-router-dom";
import { Cat } from "lucide-react";
import artigos from "@/data/artigos";

const categoriaCor = {
  saude:       { bg: "#F0E8FF", cor: "#7A4FBF", label: "Saúde" },
  higiene:     { bg: "#E0F0EE", cor: "#2D7D74", label: "Higiene" },
  alimentacao: { bg: "#FFF0D6", cor: "#B07D2A", label: "Alimentação" },
  conforto:    { bg: "#FDDDD1", cor: "#E8573A", label: "Conforto" },
  viagens:     { bg: "#E8F4FD", cor: "#2870A8", label: "Viagens" },
  diversao:    { bg: "#FDDDD1", cor: "#E8573A", label: "Diversão" },
};

const todasCategorias = [
  { id: null,          label: "Todos" },
  { id: "alimentacao", label: "Alimentação" },
  { id: "higiene",     label: "Higiene" },
  { id: "conforto",    label: "Conforto" },
  { id: "saude",       label: "Saúde" },
  { id: "viagens",     label: "Viagens" },
  { id: "diversao",    label: "Diversão" },
];

function formatarData(dataStr) {
  return new Date(dataStr).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaAtiva = searchParams.get("categoria");

  const artigosFiltrados = categoriaAtiva
    ? artigos.filter(a => a.categoria === categoriaAtiva)
    : artigos;

  return (
    <div style={{ minHeight: "100vh", background: "#FFFDF9", fontFamily: "sans-serif" }}>

      {/* NAV — igual ao Header.jsx da landing */}
      <header className="bg-[#FFFDF9]/85 backdrop-blur-xl border-b border-[#F2E3D8] shadow-[0_4px_20px_rgb(92,70,58,0.04)] sticky top-0 z-50">
        <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-full bg-[#FF9F87] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Cat className="w-5 h-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-extrabold text-xl text-[#5C463A] tracking-tight">
              Coisas para Gatos
            </span>
          </Link>
          <Link to="/blog" className="text-[#FF8A6E] font-bold text-sm">
            Blog
          </Link>
        </div>
      </header>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #FFFDF9, #FFE9D6)", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#5C463A", marginBottom: "0.75rem" }}>
            Blog 🐾
          </h1>
          <p style={{ color: "#8C776D", fontSize: "1.1rem", maxWidth: 600 }}>
            Guias, reviews e comparações honestas para donos de gatos em Portugal.
          </p>
        </div>
      </div>

      {/* FILTROS DE CATEGORIA */}
      <div style={{ borderBottom: "1px solid #F2E3D8", background: "white", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "0.5rem", overflowX: "auto", padding: "1rem 0" }}>
          {todasCategorias.map(cat => {
            const ativa = categoriaAtiva === cat.id || (!categoriaAtiva && cat.id === null);
            return (
              <button
                key={cat.id ?? "todos"}
                onClick={() => cat.id ? setSearchParams({ categoria: cat.id }) : setSearchParams({})}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: 50,
                  border: ativa ? "2px solid #FF9F87" : "2px solid #F2E3D8",
                  background: ativa ? "#FF9F87" : "white",
                  color: ativa ? "white" : "#5C463A",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                {cat.label}
                {cat.id && (
                  <span style={{ marginLeft: "0.4rem", opacity: 0.7, fontSize: "0.75rem" }}>
                    ({artigos.filter(a => a.categoria === cat.id).length})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ARTIGOS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Título da categoria ativa */}
        {categoriaAtiva && (
          <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{
              background: categoriaCor[categoriaAtiva]?.bg || "#F2E3D8",
              color: categoriaCor[categoriaAtiva]?.cor || "#5C463A",
              padding: "0.4rem 1rem",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "0.9rem"
            }}>
              {categoriaCor[categoriaAtiva]?.label || categoriaAtiva}
            </span>
            <span style={{ color: "#8C776D", fontSize: "0.9rem" }}>
              {artigosFiltrados.length} {artigosFiltrados.length === 1 ? "artigo" : "artigos"}
            </span>
            <button
              onClick={() => setSearchParams({})}
              style={{ background: "none", border: "none", color: "#FF8A6E", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem" }}
            >
              × Limpar filtro
            </button>
          </div>
        )}

        {/* Sem resultados */}
        {artigosFiltrados.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "#8C776D" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐱</div>
            <p style={{ fontSize: "1.1rem" }}>Ainda não temos artigos nesta categoria.</p>
            <button
              onClick={() => setSearchParams({})}
              style={{ marginTop: "1rem", background: "#FF9F87", color: "white", border: "none", borderRadius: 50, padding: "0.6rem 1.5rem", fontWeight: 700, cursor: "pointer" }}
            >
              Ver todos os artigos
            </button>
          </div>
        )}

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {artigosFiltrados.map((artigo) => {
            const cat = categoriaCor[artigo.categoria] || { bg: "#F2E3D8", cor: "#5C463A", label: artigo.categoria };
            return (
              <Link key={artigo.slug} to={`/blog/${artigo.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "white", borderRadius: 24, border: "1px solid #F2E3D8", padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.75rem", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(92,70,58,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{ background: cat.bg, color: cat.cor, padding: "0.25rem 0.75rem", borderRadius: 50, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {cat.label}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#8C776D" }}>{formatarData(artigo.data)}</span>
                  </div>

                  <h2 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#5C463A", lineHeight: 1.3, margin: 0 }}>
                    {artigo.titulo}
                  </h2>

                  <p style={{ color: "#8C776D", fontSize: "0.9rem", margin: 0, flexGrow: 1, lineHeight: 1.6 }}>
                    {artigo.descricao}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#8C776D" }}>⏱ {artigo.tempoLeitura}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FF8A6E" }}>Ler artigo →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#5C463A", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "2rem 1.5rem", fontSize: "0.82rem" }}>
        <p>© {new Date().getFullYear()} CoisasParaGatos.pt · Participante no programa Amazon Associates.</p>
      </footer>
    </div>
  );
}
