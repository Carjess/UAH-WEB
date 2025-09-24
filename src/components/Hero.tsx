import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Más de 40 años de excelencia académica
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Tu futuro profesional comienza en la{" "}
              <span className="hero-text">UAH</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Universidad Alejandro de Humboldt: Formamos profesionales 
              integrales con valores, conocimientos y competencias para 
              transformar la sociedad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Conoce nuestras carreras
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Proceso de admisión
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Carreras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">Sedes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
            </div>
          </div>

          <div className="lg:text-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-10 transform rotate-6"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-elegant border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Comunidad Estudiantil</h3>
                    <p className="text-sm text-muted-foreground">
                      Miles de egresados exitosos
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Educación de Calidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Programas actualizados
                    </p>
                  </div>
                  <div className="col-span-2 text-center p-4 rounded-lg bg-primary/5">
                    <Award className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Reconocimiento Nacional</h3>
                    <p className="text-sm text-muted-foreground">
                      Universidad privada líder en Venezuela
                    </p>
                  </div>
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