import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Categories from "@/components/landing/Categories";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import RecentArticles from "@/components/landing/RecentArticles";
import Newsletter from "@/components/landing/Newsletter";
import FooterSection from "@/components/landing/FooterSection";

export default function Landing() {
    return (
        <main
            data-testid="landing-page"
            className="min-h-screen bg-[#FFFDF9] text-[#5C463A] overflow-x-hidden"
        >
            <Header />
            <Hero />
            <Categories />
            <FeaturedProducts />
            <RecentArticles />
            <Newsletter />
            <FooterSection />
        </main>
    );
}
