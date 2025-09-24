import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
