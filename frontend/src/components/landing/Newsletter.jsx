import { useState } from "react";
import { Mail, Check, Sparkles } from "lucide-react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail("");
        }, 3500);
    };

    return (
        <section
            data-testid="newsletter-section"
            className="px-6 md:px-12 lg:px-24 py-12 md:py-20"
        >
            <div className="max-w-5xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#FF9F87] to-[#FF8A6E] rounded-[40px] p-8 md:p-16 text-center text-white overflow-hidden shadow-[0_20px_60px_rgb(255,159,135,0.4)]">
                    {/* Decorative paws */}
                    <div className="absolute top-6 left-8 text-white/20 text-4xl rotate-[-15deg] select-none">🐾</div>
                    <div className="absolute top-16 right-12 text-white/15 text-5xl rotate-[20deg] select-none">🐾</div>
                    <div className="absolute bottom-8 left-16 text-white/15 text-3xl rotate-[10deg] select-none">🐾</div>
                    <div className="absolute bottom-12 right-8 text-white/20 text-4xl rotate-[-20deg] select-none">🐾</div>

                    <div className="relative">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                            <Mail className="w-8 h-8 text-white" strokeWidth={2.25} />
                        </div>

                        <h2
                            data-testid="newsletter-title"
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight"
                        >
                            Junte-se ao Clube Felino 🐾
                        </h2>

                        <p
                            data-testid="newsletter-description"
                            className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8"
                        >
                            Receba todas as semanas as melhores ofertas, novas
                            análises e dicas exclusivas. Zero spam, só conteúdo
                            útil para o seu gato.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            data-testid="newsletter-form"
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="O seu melhor email"
                                required
                                data-testid="newsletter-email-input"
                                className="flex-1 bg-white border-2 border-transparent rounded-full px-6 py-4 text-[#5C463A] placeholder-[#8C776D] focus:outline-none focus:border-white focus:ring-4 focus:ring-white/30 transition-all font-semibold"
                            />
                            <button
                                type="submit"
                                data-testid="newsletter-submit-button"
                                className="bg-white text-[#FF8A6E] hover:bg-[#FFE9D6] rounded-full px-8 py-4 font-bold transition-all duration-300 shadow-sm whitespace-nowrap inline-flex items-center justify-center gap-2"
                            >
                                {submitted ? (
                                    <>
                                        <Check className="w-5 h-5" /> Inscrito!
                                    </>
                                ) : (
                                    <>
                                        Inscrever-me
                                        <Sparkles className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-white/70 text-xs mt-5">
                            Ao subscrever aceita a nossa política de privacidade. Pode cancelar a qualquer momento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
