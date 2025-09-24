import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, BookOpen, Globe, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelencia Académica",
      description: "40+ años formando profesionales de calidad con programas académicos actualizados y reconocidos."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Estudiantil",
      description: "Más de 25,000 egresados exitosos trabajando en empresas líderes de Venezuela y el mundo."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Programas Innovadores",
      description: "6 carreras profesionales diseñadas para las demandas del mercado laboral actual."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Proyección Nacional",
      description: "Presencia en las principales ciudades de Venezuela con sedes en Valencia y Caracas."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Mendoza",
      role: "Ingeniero en Sistemas",
      company: "Empresas Polar",
      content: "La UAH me dio las herramientas necesarias para desarrollarme como profesional. La calidad académica y el acompañamiento docente son excepcionales."
    },
    {
      name: "Lic. María González",
      role: "Gerente de Marketing",
      company: "Banesco",
      content: "Los conocimientos adquiridos en Publicidad me permitieron destacar en mi carrera. La formación integral que ofrece la UAH es incomparable."
    },
    {
      name: "Ing. Roberto Silva",
      role: "Director de Operaciones",
      company: "CANTV",
      content: "La formación en Administración de Empresas que recibí en la UAH fue clave para mi crecimiento profesional y liderazgo empresarial."
    }
  ];

  const offerings = [
    "Laboratorios especializados con tecnología de vanguardia",
    "Biblioteca digital con acceso a bases de datos internacionales",
    "Programas de intercambio estudiantil y cooperación internacional",
    "Centro de desarrollo profesional y bolsa de trabajo",
    "Actividades extracurriculares y deportivas",
    "Acompañamiento académico personalizado",
    "Convenios con empresas para prácticas profesionales",
    "Programas de formación continua y postgrados"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Nosotros
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Por qué elegir la{" "}
            <span className="text-primary">UAH</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre todo lo que la Universidad Alejandro de Humboldt ofrece 
            para tu formación profesional y desarrollo personal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-red transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Lo que ofrecemos a nuestros estudiantes
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm font-medium">{offering}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-primary" />
              Lo que dicen nuestros egresados
            </h3>
            <p className="text-muted-foreground">
              Testimonios reales de profesionales exitosos formados en la UAH
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-red transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;