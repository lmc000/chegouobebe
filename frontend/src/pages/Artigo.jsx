import { useParams, Link, Navigate } from "react-router-dom";
import artigos from "@/data/artigos";

const categoriaCor = {
  saude:       { bg: "#F0E8FF", cor: "#7A4FBF", label: "Saúde" },
  higiene:     { bg: "#E0F0EE", cor: "#2D7D74", label: "Higiene" },
  alimentacao: { bg: "#FFF0D6", cor: "#B07D2A", label: "Alimentação" },
  conforto:    { bg: "#FDDDD1", cor: "#E8573A", label: "Conforto" },
  viagens:     { bg: "#E8F4FD", cor: "#2870A8", label: "Viagens" },
};

function formatarData(dataStr) {
  return new Date(dataStr).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
}

// Renderer simples de Markdown para HTML
function renderMarkdown(texto) {
  const linhas = texto.trim().split("\n");
  const resultado = [];
  let i = 0;
  let tabelaBuffer = [];
  let emTabela = false;

  const processarInline = (texto) => {
    return texto
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener sponsored" style="display:inline-flex;align-items:center;gap:0.4rem;background:#FF9900;color:#111;padding:0.5rem 1.25rem;border-radius:50px;font-weight:700;font-size:0.9rem;text-decoration:none;margin:0.25rem 0;">🛒 $1</a>'
      );
  };

  while (i < linhas.length) {
    const linha = linhas[i];

    // Tabela
    if (linha.trim().startsWith("|")) {
      if (!emTabela) emTabela = true;
      tabelaBuffer.push(linha);
      i++;
      continue;
    } else if (emTabela) {
      // Renderizar tabela acumulada
      const linhasTabela = tabelaBuffer.filter(l => !l.match(/^\|[-| ]+\|$/));
      const cabecalho = linhasTabela[0]?.split("|").filter(c => c.trim()).map(c => `<th style="padding:0.6rem 1rem;text-align:left;background:#FDF8F2;font-family:Georgia,serif;">${c.trim()}</th>`).join("") || "";
      const linhasCorpo = linhasTabela.slice(1).map(l => {
        const celulas = l.split("|").filter(c => c.trim()).map(c => `<td style="padding:0.6rem 1rem;border-top:1px solid #EDE5DC;">${processarInline(c.trim())}</td>`).join("");
        return `<tr>${celulas}</tr>`;
      }).join("");
      resultado.push(`<div style="overflow-x:auto;margin:1.5rem 0;"><table style="width:100%;border-collapse:collapse;border:1px solid #EDE5DC;border-radius:12px;overflow:hidden;"><thead><tr>${cabecalho}</tr></thead><tbody>${linhasCorpo}</tbody></table></div>`);
      tabelaBuffer = [];
      emTabela = false;
      continue;
    }

    // Separador
    if (linha.trim() === "---") {
      resultado.push(`<hr style="border:none;border-top:1px solid #EDE5DC;margin:2rem 0;" />`);
    }
    // H3
    else if (linha.startsWith("### ")) {
      resultado.push(`<h3 style="font-family:Georgia,serif;font-size:1.2rem;color:#2D7D74;margin:1.75rem 0 0.75rem;">${processarInline(linha.slice(4))}</h3>`);
    }
    // H2
    else if (linha.startsWith("## ")) {
      resultado.push(`<h2 style="font-family:Georgia,serif;font-size:1.5rem;color:#1E1A16;margin:2rem 0 1rem;">${processarInline(linha.slice(3))}</h2>`);
    }
    // H1
    else if (linha.startsWith("# ")) {
      resultado.push(`<h1 style="font-family:Georgia,serif;font-size:2rem;color:#1E1A16;margin:0 0 1rem;">${processarInline(linha.slice(2))}</h1>`);
    }
    // Lista
    else if (linha.trim().startsWith("- ")) {
      const itens = [linha.trim().slice(2)];
      while (i + 1 < linhas.length && linhas[i + 1].trim().startsWith("- ")) {
        i++;
        itens.push(linhas[i].trim().slice(2));
      }
      const liHtml = itens.map(it => `<li style="margin-bottom:0.4rem;color:#5A4F45;">${processarInline(it)}</li>`).join("");
      resultado.push(`<ul style="padding-left:1.5rem;margin:1rem 0;">${liHtml}</ul>`);
    }
    // Nota em itálico (linha que começa com *)
    else if (linha.trim().startsWith("*Este artigo")) {
      resultado.push(`<p style="font-size:0.8rem;color:#9A8F86;border-top:1px solid #EDE5DC;padding-top:1rem;margin-top:2rem;">${processarInline(linha.trim().replace(/^\*|\*$/g, ""))}</p>`);
    }
    // Parágrafo normal
    else if (linha.trim() !== "") {
      resultado.push(`<p style="color:#5A4F45;line-height:1.8;margin-bottom:1rem;">${processarInline(linha)}</p>`);
    }

    i++;
  }

  return resultado.join("\n");
}

export default function Artigo() {
  const { slug } = useParams();
  const artigo = artigos.find(a => a.slug === slug);

  if (!artigo) return <Navigate to="/blog" replace />;

  const cat = categoriaCor[artigo.categoria] || { bg: "#f5f5f5", cor: "#666", label: artigo.categoria };
  const outrosArtigos = artigos.filter(a => a.slug !== slug).slice(0, 3);

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
          <Link to="/blog" style={{ color: "#5A4F45", textDecoration: "none", fontSize: "0.9rem" }}>← Voltar ao Blog</Link>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ background: cat.bg, color: cat.cor, padding: "0.25rem 0.75rem", borderRadius: 50, fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase" }}>
            {cat.label}
          </span>
          <span style={{ fontSize: "0.82rem", color: "#9A8F86" }}>{formatarData(artigo.data)}</span>
          <span style={{ fontSize: "0.82rem", color: "#9A8F86" }}>⏱ {artigo.tempoLeitura}</span>
        </div>

        {/* Título */}
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#1E1A16", lineHeight: 1.2, marginBottom: "1rem" }}>
          {artigo.titulo}
        </h1>

        {/* Descrição */}
        <p style={{ fontSize: "1.1rem", color: "#5A4F45", lineHeight: 1.7, marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #EDE5DC" }}>
          {artigo.descricao}
        </p>

        {/* Corpo */}
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(artigo.conteudo) }} />

      </div>

      {/* MAIS ARTIGOS */}
      {outrosArtigos.length > 0 && (
        <div style={{ background: "#FFFCF8", borderTop: "1px solid #EDE5DC", padding: "3rem 1.5rem" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: "#1E1A16", marginBottom: "1.5rem" }}>
              Mais artigos 🐾
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {outrosArtigos.map(a => {
                const c = categoriaCor[a.categoria] || { bg: "#f5f5f5", cor: "#666", label: a.categoria };
                return (
                  <Link key={a.slug} to={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "white", borderRadius: 12, border: "1px solid #EDE5DC", padding: "1.25rem", transition: "transform 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                      onMouseLeave={e => e.currentTarget.style.transform = ""}
                    >
                      <span style={{ background: c.bg, color: c.cor, padding: "0.2rem 0.6rem", borderRadius: 50, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase" }}>
                        {c.label}
                      </span>
                      <h3 style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", color: "#1E1A16", margin: "0.75rem 0 0.5rem", lineHeight: 1.3 }}>
                        {a.titulo}
                      </h3>
                      <span style={{ fontSize: "0.82rem", color: "#2D7D74", fontWeight: 600 }}>Ler →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ background: "#1E1A16", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "2rem 1.5rem", fontSize: "0.82rem" }}>
        <p>© {new Date().getFullYear()} CoisasParaGatos.pt · Participante no programa Amazon Associates.</p>
      </footer>
    </div>
  );
}
