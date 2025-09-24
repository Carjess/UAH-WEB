import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen, GraduationCap, Trophy, Calendar } from "lucide-react";
import universityBg from "@/assets/university-background.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* University background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${universityBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-sm font-medium mb-8">
              <Award className="w-5 h-5 mr-2" />
              Más de 40 años de excelencia académica
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
              Tu futuro profesional comienza en la{" "}
              <span className="text-primary drop-shadow-lg">UAH</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Universidad Alejandro de Humboldt: Formamos profesionales 
              integrales con valores, conocimientos y competencias para 
              transformar la sociedad.
            </p>
            
            <div className="flex justify-center mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group">
                Conoce nuestras carreras
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Stats Bar */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 animate-pulse">8,500+</div>
                  <div className="text-sm text-white/70 font-medium">Estudiantes Activos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 animate-pulse">25,000+</div>
                  <div className="text-sm text-white/70 font-medium">Egresados Exitosos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 animate-pulse">40+</div>
                  <div className="text-sm text-white/70 font-medium">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 animate-pulse">6</div>
                  <div className="text-sm text-white/70 font-medium">Carreras Profesionales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;