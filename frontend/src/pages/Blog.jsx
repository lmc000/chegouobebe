import { Link } from "react-router-dom";
import artigos from "@/data/artigos";

const categoriaCor = {
  saude:       { bg: "#F0E8FF", cor: "#7A4FBF", label: "Saúde" },
  higiene:     { bg: "#E0F0EE", cor: "#2D7D74", label: "Higiene" },
  alimentacao: { bg: "#FFF0D6", cor: "#B07D2A", label: "Alimentação" },
  conforto:    { bg: "#FDDDD1", cor: "#E8573A", label: "Conforto" },
  viagens:     { bg: "#E8F4FD", cor: "#2870A8", label: "Viagens" },
};

function formatarData(dataStr) {
  const data = new Date(dataStr);
  return data.toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  return (
    <div style={{ minHeight: "100vh", background: "#FDF8F2", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "rgba(253,248,242,0.95)", borderBottom: "1px solid #EDE5DC", padding: "0 1.5rem", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", height: 68, gap: "2rem" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.6rem" }}>🐱</span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#1E1A16" }}>
              Coisas<strong style={{ color: "#F5845C" }}>ParaGatos</strong>
            </span>
          </Link>
          <Link to="/blog" style={{ color: "#2D7D74", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>Blog</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #FDF8F2, #FFF5EE)", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1E1A16", marginBottom: "0.75rem" }}>
            Blog 🐾
          </h1>
          <p style={{ color: "#5A4F45", fontSize: "1.1rem", maxWidth: 600 }}>
            Guias, reviews e comparações honestas para donos de gatos em Portugal.
          </p>
        </div>
      </div>

      {/* ARTIGOS */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {artigos.map((artigo) => {
            const cat = categoriaCor[artigo.categoria] || { bg: "#f5f5f5", cor: "#666", label: artigo.categoria };
            return (
              <Link
                key={artigo.slug}
                to={`/blog/${artigo.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "white",
                  borderRadius: 16,
                  border: "1px solid #EDE5DC",
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,26,22,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  {/* Badge + data */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{ background: cat.bg, color: cat.cor, padding: "0.25rem 0.75rem", borderRadius: 50, fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {cat.label}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "#9A8F86" }}>{formatarData(artigo.data)}</span>
                  </div>

                  {/* Título */}
                  <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "#1E1A16", lineHeight: 1.3, margin: 0 }}>
                    {artigo.titulo}
                  </h2>

                  {/* Descrição */}
                  <p style={{ color: "#5A4F45", fontSize: "0.9rem", margin: 0, flexGrow: 1, lineHeight: 1.6 }}>
                    {artigo.descricao}
                  </p>

                  {/* Rodapé */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#9A8F86" }}>⏱ {artigo.tempoLeitura}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2D7D74" }}>Ler artigo →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#1E1A16", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "2rem 1.5rem", fontSize: "0.82rem" }}>
        <p>© {new Date().getFullYear()} CoisasParaGatos.pt · Participante no programa Amazon Associates.</p>
      </footer>
    </div>
  );
}
