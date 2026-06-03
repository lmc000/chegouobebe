import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Categories from "@/components/landing/Categories";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import RecentArticles from "@/components/landing/RecentArticles";
import Newsletter from "@/components/landing/Newsletter";
import FooterSection from "@/components/landing/FooterSection";

export default function Landing() {
    return (
        <main className="min-h-screen bg-[#F5FAFA] text-[#1A3C38] overflow-x-hidden">
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
