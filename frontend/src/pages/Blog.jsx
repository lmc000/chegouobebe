import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Clock, Search } from "lucide-react";
import artigos from "../data/artigos";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/FooterSection";

const CATEGORIAS = [
    { id: "todas",       label: "Todos" },
    { id: "carrinho",    label: "Carrinhos" },
    { id: "sono",        label: "Sono" },
    { id: "alimentacao", label: "Alimentação" },
    { id: "higiene",     label: "Higiene" },
    { id: "seguranca",   label: "Segurança" },
    { id: "saude",       label: "Saúde" },
    { id: "estimulacao", label: "Estimulação" },
    { id: "gravidez",    label: "Gravidez" },
    { id: "cuidados",    label: "Cuidadores" },
];

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const catParam = searchParams.get("categoria") || "todas";
    const [categoria, setCategoria] = useState(catParam);
    const [busca, setBusca] = useState("");

    // Sincroniza quando a URL muda (ex: clique nas categorias da homepage)
    useEffect(() => {
        setCategoria(catParam);
    }, [catParam]);

    const handleCategoria = (id) => {
        setCategoria(id);
        if (id === "todas") {
            setSearchParams({});
        } else {
            setSearchParams({ categoria: id });
        }
    };

    const filtrados = artigos.filter((a) => {
        const matchCat = categoria === "todas" || a.categoria === categoria;
        const matchBusca = a.titulo.toLowerCase().includes(busca.toLowerCase());
        return matchCat && matchBusca;
    });

    return (
        <div className="min-h-screen bg-[#F5FAFA]">
            <Header />
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-4xl font-extrabold text-[#1A3C38] mb-2">Blog & Guias</h1>
                        <p className="text-[#3D6B65]">Reviews honestas e guias práticos para pais brasileiros.</p>
                    </div>
                    <div className="relative mb-6 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D6B65]" />
                        <input type="text" placeholder="Pesquisar artigos..." value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8F5F3] rounded-2xl text-[#1A3C38] placeholder-[#3D6B65] focus:outline-none focus:border-[#2A9D8F]" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {CATEGORIAS.map((cat) => (
                            <button key={cat.id} onClick={() => handleCategoria(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                                    categoria === cat.id
                                        ? "bg-[#2A9D8F] text-white shadow-sm"
                                        : "bg-white border border-[#E8F5F3] text-[#3D6B65] hover:border-[#2A9D8F]"
                                }`}>
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtrados.map((artigo) => (
                            <Link key={artigo.slug} to={`/blog/${artigo.slug}`}
                                className="group bg-white rounded-3xl border border-[#E8F5F3] p-6 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all">
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#E8F5F3] text-[#2A9D8F] text-xs font-bold px-3 py-1 rounded-full capitalize">
                                        {artigo.categoria}
                                    </span>
                                    <span className="flex items-center gap-1 text-[#3D6B65] text-xs">
                                        <Clock className="w-3 h-3" /> {artigo.tempoLeitura} min
                                    </span>
                                </div>
                                <h2 className="font-bold text-[#1A3C38] text-base leading-snug group-hover:text-[#2A9D8F] transition-colors">
                                    {artigo.titulo}
                                </h2>
                                <p className="text-[#3D6B65] text-sm leading-relaxed line-clamp-2">{artigo.descricao}</p>
                                <span className="flex items-center gap-1 text-[#2A9D8F] font-semibold text-sm mt-auto">
                                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                    {filtrados.length === 0 && (
                        <div className="text-center py-20 text-[#3D6B65]">
                            <p className="text-5xl mb-4">🔍</p>
                            <p className="text-lg font-medium">Nenhum artigo encontrado.</p>
                        </div>
                    )}
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
