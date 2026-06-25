import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import artigos from "../data/artigos";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/FooterSection";

const CAT_LABELS = {
    carrinho: "Carrinhos", sono: "Sono", alimentacao: "Alimentação",
    higiene: "Higiene", seguranca: "Segurança", saude: "Saúde",
    estimulacao: "Estimulação", gravidez: "Gravidez",
};

function renderContent(text) {
    const lines = text.trim().split("\n");
    const elements = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
        const line = lines[i];
        if (line.trim() === "") { i++; continue; }
        if (line.trim() === "---") {
            elements.push(<hr key={key++} className="my-6 border-[#E8F5F3]" />);
            i++; continue;
        }
        if (line.trim().startsWith("|")) {
            const tableLines = [];
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                tableLines.push(lines[i]); i++;
            }
            const headers = tableLines[0].split("|").filter(c => c.trim()).map(c => c.trim());
            const rows = tableLines.slice(2).map(row => row.split("|").filter(c => c.trim()).map(c => c.trim()));
            elements.push(
                <div key={key++} className="overflow-x-auto my-6 rounded-2xl border border-[#E8F5F3]">
                    <table className="w-full border-collapse text-sm">
                        <thead><tr>{headers.map((h, j) => (
                            <th key={j} className="px-4 py-3 text-left font-bold text-white text-sm" style={{ backgroundColor: "#2A9D8F" }}>{h}</th>
                        ))}</tr></thead>
                        <tbody>{rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#F5FAFA]"}>
                                {row.map((cell, ci) => (
                                    <td key={ci} className="px-4 py-3 text-sm text-[#3D6B65] border-b border-[#E8F5F3]">{cell}</td>
                                ))}
                            </tr>
                        ))}</tbody>
                    </table>
                </div>
            );
            continue;
        }
        if (line.startsWith("### ")) {
            elements.push(<h3 key={key++} className="text-xl font-bold text-[#1A3C38] mt-8 mb-3">{parseLine(line.slice(4))}</h3>);
            i++; continue;
        }
        if (line.startsWith("## ")) {
            elements.push(<h2 key={key++} className="text-2xl font-bold text-[#1A3C38] mt-10 mb-4 pb-2 border-b border-[#E8F5F3]">{parseLine(line.slice(3))}</h2>);
            i++; continue;
        }
        if (line.startsWith("# ")) {
            elements.push(<h1 key={key++} className="text-3xl font-extrabold text-[#1A3C38] mt-6 mb-4">{parseLine(line.slice(2))}</h1>);
            i++; continue;
        }
        if (line.startsWith("- ") || line.startsWith("* ")) {
            const prefix = line.startsWith("- ") ? "- " : "* ";
            const items = [];
            while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
                items.push(lines[i].slice(2)); i++;
            }
            elements.push(<ul key={key++} className="list-disc list-inside space-y-2 my-4 text-[#3D6B65]">
                {items.map((item, j) => <li key={j} className="leading-relaxed">{parseLine(item)}</li>)}
            </ul>);
            continue;
        }
        if (/^\d+\./.test(line)) {
            const items = [];
            while (i < lines.length && /^\d+\./.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s*/, "")); i++; }
            elements.push(<ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-[#3D6B65]">
                {items.map((item, j) => <li key={j} className="leading-relaxed">{parseLine(item)}</li>)}
            </ol>);
            continue;
        }
        elements.push(<p key={key++} className="text-[#3D6B65] leading-relaxed mb-4">{parseLine(line)}</p>);
        i++;
    }
    return elements;
}

function parseLine(text) {
    const parts = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
        if (match[1] && match[2]) {
            parts.push(<a key={key++} href={match[2]} target="_blank" rel="sponsored noopener noreferrer"
                className="text-[#2A9D8F] font-semibold hover:underline inline-flex items-center gap-1">
                {match[1]} <ExternalLink className="w-3 h-3 inline" /></a>);
        } else if (match[3]) {
            parts.push(<strong key={key++} className="text-[#1A3C38] font-bold">{match[3]}</strong>);
        } else if (match[4]) {
            parts.push(<em key={key++} className="italic">{match[4]}</em>);
        }
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length === 0 ? text : parts;
}

function extractTOC(conteudo) {
    return conteudo.split('\n')
        .filter(l => l.startsWith('## '))
        .map(l => l.slice(3).trim())
        .slice(0, 8);
}

function extractFAQs(conteudo) {
    const lines = conteudo.split('\n');
    const faqs = [];
    let q = null, a = [];
    for (const line of lines) {
        if (line.startsWith('## ')) {
            if (q && a.length > 0) faqs.push({ q, a: a.join(' ').trim() });
            q = line.slice(3).trim().replace(/—.*$/, '').trim();
            if (!q.endsWith('?')) q += '?';
            a = [];
        } else if (q && line.trim() && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('-') && !line.startsWith('>')) {
            a.push(line.trim());
        }
    }
    if (q && a.length > 0) faqs.push({ q, a: a.join(' ').trim() });
    return faqs.filter(f => f.a.length > 40).slice(0, 5);
}
export default function Artigo() {
    const { slug } = useParams();
    const artigo = artigos.find((a) => a.slug === slug);
    const toc = artigo ? extractTOC(artigo.conteudo) : [];
    const related = artigo ? artigos.filter(a => a.slug !== artigo.slug && a.categoria === artigo.categoria).slice(0, 3) : [];
    const shareUrl = artigo ? `https://www.chegouobebe.com.br/blog/$`{artigo.slug}` : '';

    useEffect(() => {
        if (!artigo) return;
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'article');
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": artigo.titulo,
            "description": artigo.descricao,
            "datePublished": artigo.data,
            "dateModified": artigo.data,
            "image": `https://www.chegouobebe.com.br/images/artigos/${artigo.slug}.jpg`,
            "author": { "@type": "Person", "name": "Luís Costa", "url": "https://www.chegouobebe.com.br/sobre" },
            "url": `https://www.chegouobebe.com.br/blog/${artigo.slug}`,
            "inLanguage": "pt-BR",
            "publisher": {
                "@type": "Organization",
                "name": "Chegou o Bebê",
                "url": "https://www.chegouobebe.com.br"
            }
        });
        document.head.appendChild(script);
        return () => { try { document.head.removeChild(script); } catch(e) {} };
    }, [artigo]);
    useEffect(() => {
        if (!artigo) return;
        const scripts = [];

        // FAQ schema
        const faqs = extractFAQs(artigo.conteudo);
        if (faqs.length >= 2) {
            const fs = document.createElement('script');
            fs.type = 'application/ld+json';
            fs.setAttribute('data-schema', 'faq');
            fs.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a.substring(0, 500) }
                }))
            });
            document.head.appendChild(fs);
            scripts.push(fs);
        }

        // BreadcrumbList schema
        const bs = document.createElement('script');
        bs.type = 'application/ld+json';
        bs.setAttribute('data-schema', 'breadcrumb');
        bs.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.chegouobebe.com.br" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.chegouobebe.com.br/blog" },
                { "@type": "ListItem", "position": 3, "name": artigo.titulo, "item": `https://www.chegouobebe.com.br/blog/${artigo.slug}` }
            ]
        });
        document.head.appendChild(bs);
        scripts.push(bs);

        return () => { scripts.forEach(s => { try { document.head.removeChild(s); } catch(e) {} }); };
    }, [artigo]);

    if (!artigo) {
        return (
            <div className="min-h-screen bg-[#F5FAFA] flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center flex-col gap-4 text-[#3D6B65] pt-28">
                    <p className="text-5xl">👶</p>
                    <p className="text-xl font-bold text-[#1A3C38]">Artigo não encontrado</p>
                    <Link to="/blog" className="text-[#2A9D8F] font-semibold hover:underline">← Voltar ao blog</Link>
                </main>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5FAFA]">
            <Header />
            <Helmet>
                <title>{artigo.titulo} — Chegou o Bebê</title>
                <meta name="description" content={artigo.descricao} />
                <meta property="og:title" content={artigo.titulo} />
                <meta property="og:description" content={artigo.descricao} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.chegouobebe.com.br/blog/${artigo.slug}`} />
                <meta property="og:image" content={`https://www.chegouobebe.com.br/images/artigos/${artigo.slug}.jpg`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={`https://www.chegouobebe.com.br/images/artigos/${artigo.slug}.jpg`} />
                <meta name="twitter:title" content={artigo.titulo} />
                <meta name="twitter:description" content={artigo.descricao} />
                <link rel="canonical" href={`https://www.chegouobebe.com.br/blog/${artigo.slug}`} />
            </Helmet>
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[#2A9D8F] font-semibold mb-8 hover:underline">
                        <ArrowLeft className="w-4 h-4" /> Voltar ao blog
                    </Link>
                    <div className="mb-8">
                        <span className="bg-[#E8F5F3] text-[#2A9D8F] text-xs font-bold px-3 py-1 rounded-full capitalize mb-4 inline-block">
                            {CAT_LABELS[artigo.categoria] || artigo.categoria}
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C38] leading-tight mb-4">{artigo.titulo}</h1>
                        <p className="text-[#3D6B65] text-lg mb-4">{artigo.descricao}</p>
                        <div className="flex items-center gap-4 text-[#3D6B65] text-sm">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {artigo.tempoLeitura}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {artigo.data}</span>
                        </div>
                    </div>
                    
                    {toc.length >= 3 && (
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Neste artigo</p>
                            <ol className="space-y-1.5 list-none">
                                {toc.map((text, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                                        <span className="font-bold text-gray-300">{i + 1}.</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm text-gray-500 font-medium">Partilhar:</span>
                        <a href={`https://wa.me/?text=${encodeURIComponent(artigo.titulo + ' ' + shareUrl)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                            WhatsApp
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(artigo.titulo)}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                            𝕏 Twitter
                        </a>
                    </div>
<div className="prose max-w-none">{renderContent(artigo.conteudo)}
                    {related.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-base font-bold text-gray-700 mb-4">Artigos relacionados</h3>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {related.map(a => (
                                    <Link key={a.slug} to={`/blog/${a.slug}`} className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                                        <p className="font-semibold text-gray-800 text-sm leading-snug mb-1">{a.titulo}</p>
                                        <p className="text-xs text-gray-400">{a.tempoLeitura}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}</div>

                </div>
            </main>
            <FooterSection />
        </div>
    );
}
